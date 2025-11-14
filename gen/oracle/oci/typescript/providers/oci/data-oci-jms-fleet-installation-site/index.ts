// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetInstallationSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#application_id DataOciJmsFleetInstallationSite#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#fleet_id DataOciJmsFleetInstallationSite#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#id DataOciJmsFleetInstallationSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#installation_path DataOciJmsFleetInstallationSite#installation_path}
  */
  readonly installationPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#jre_distribution DataOciJmsFleetInstallationSite#jre_distribution}
  */
  readonly jreDistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#jre_security_status DataOciJmsFleetInstallationSite#jre_security_status}
  */
  readonly jreSecurityStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#jre_vendor DataOciJmsFleetInstallationSite#jre_vendor}
  */
  readonly jreVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#jre_version DataOciJmsFleetInstallationSite#jre_version}
  */
  readonly jreVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#managed_instance_id DataOciJmsFleetInstallationSite#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#os_family DataOciJmsFleetInstallationSite#os_family}
  */
  readonly osFamily?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#path_contains DataOciJmsFleetInstallationSite#path_contains}
  */
  readonly pathContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#time_end DataOciJmsFleetInstallationSite#time_end}
  */
  readonly timeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#time_start DataOciJmsFleetInstallationSite#time_start}
  */
  readonly timeStart?: string;
}
export interface DataOciJmsFleetInstallationSiteItemsBlocklistStruct {
}

export function dataOciJmsFleetInstallationSiteItemsBlocklistStructToTerraform(struct?: DataOciJmsFleetInstallationSiteItemsBlocklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetInstallationSiteItemsBlocklistStructToHclTerraform(struct?: DataOciJmsFleetInstallationSiteItemsBlocklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetInstallationSiteItemsBlocklistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetInstallationSiteItemsBlocklistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class DataOciJmsFleetInstallationSiteItemsBlocklistStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference {
    return new DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetInstallationSiteItemsJre {
}

export function dataOciJmsFleetInstallationSiteItemsJreToTerraform(struct?: DataOciJmsFleetInstallationSiteItemsJre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetInstallationSiteItemsJreToHclTerraform(struct?: DataOciJmsFleetInstallationSiteItemsJre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetInstallationSiteItemsJreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetInstallationSiteItemsJre | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetInstallationSiteItemsJre | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distribution - computed: true, optional: false, required: false
  public get distribution() {
    return this.getStringAttribute('distribution');
  }

  // jre_key - computed: true, optional: false, required: false
  public get jreKey() {
    return this.getStringAttribute('jre_key');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciJmsFleetInstallationSiteItemsJreList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetInstallationSiteItemsJreOutputReference {
    return new DataOciJmsFleetInstallationSiteItemsJreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetInstallationSiteItemsOperatingSystem {
}

export function dataOciJmsFleetInstallationSiteItemsOperatingSystemToTerraform(struct?: DataOciJmsFleetInstallationSiteItemsOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetInstallationSiteItemsOperatingSystemToHclTerraform(struct?: DataOciJmsFleetInstallationSiteItemsOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetInstallationSiteItemsOperatingSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetInstallationSiteItemsOperatingSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // managed_instance_count - computed: true, optional: false, required: false
  public get managedInstanceCount() {
    return this.getNumberAttribute('managed_instance_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciJmsFleetInstallationSiteItemsOperatingSystemList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference {
    return new DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetInstallationSiteItems {
}

export function dataOciJmsFleetInstallationSiteItemsToTerraform(struct?: DataOciJmsFleetInstallationSiteItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetInstallationSiteItemsToHclTerraform(struct?: DataOciJmsFleetInstallationSiteItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetInstallationSiteItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetInstallationSiteItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetInstallationSiteItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approximate_application_count - computed: true, optional: false, required: false
  public get approximateApplicationCount() {
    return this.getNumberAttribute('approximate_application_count');
  }

  // blocklist - computed: true, optional: false, required: false
  private _blocklist = new DataOciJmsFleetInstallationSiteItemsBlocklistStructList(this, "blocklist", false);
  public get blocklist() {
    return this._blocklist;
  }

  // installation_key - computed: true, optional: false, required: false
  public get installationKey() {
    return this.getStringAttribute('installation_key');
  }

  // jre - computed: true, optional: false, required: false
  private _jre = new DataOciJmsFleetInstallationSiteItemsJreList(this, "jre", false);
  public get jre() {
    return this._jre;
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // operating_system - computed: true, optional: false, required: false
  private _operatingSystem = new DataOciJmsFleetInstallationSiteItemsOperatingSystemList(this, "operating_system", false);
  public get operatingSystem() {
    return this._operatingSystem;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // security_status - computed: true, optional: false, required: false
  public get securityStatus() {
    return this.getStringAttribute('security_status');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_last_seen - computed: true, optional: false, required: false
  public get timeLastSeen() {
    return this.getStringAttribute('time_last_seen');
  }
}

export class DataOciJmsFleetInstallationSiteItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetInstallationSiteItemsOutputReference {
    return new DataOciJmsFleetInstallationSiteItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site oci_jms_fleet_installation_site}
*/
export class DataOciJmsFleetInstallationSite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_installation_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetInstallationSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetInstallationSite to import
  * @param importFromId The id of the existing DataOciJmsFleetInstallationSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetInstallationSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_installation_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_installation_site oci_jms_fleet_installation_site} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetInstallationSiteConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetInstallationSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_installation_site',
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
    this._applicationId = config.applicationId;
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._installationPath = config.installationPath;
    this._jreDistribution = config.jreDistribution;
    this._jreSecurityStatus = config.jreSecurityStatus;
    this._jreVendor = config.jreVendor;
    this._jreVersion = config.jreVersion;
    this._managedInstanceId = config.managedInstanceId;
    this._osFamily = config.osFamily;
    this._pathContains = config.pathContains;
    this._timeEnd = config.timeEnd;
    this._timeStart = config.timeStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // installation_path - computed: false, optional: true, required: false
  private _installationPath?: string; 
  public get installationPath() {
    return this.getStringAttribute('installation_path');
  }
  public set installationPath(value: string) {
    this._installationPath = value;
  }
  public resetInstallationPath() {
    this._installationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationPathInput() {
    return this._installationPath;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsFleetInstallationSiteItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // jre_distribution - computed: false, optional: true, required: false
  private _jreDistribution?: string; 
  public get jreDistribution() {
    return this.getStringAttribute('jre_distribution');
  }
  public set jreDistribution(value: string) {
    this._jreDistribution = value;
  }
  public resetJreDistribution() {
    this._jreDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jreDistributionInput() {
    return this._jreDistribution;
  }

  // jre_security_status - computed: false, optional: true, required: false
  private _jreSecurityStatus?: string; 
  public get jreSecurityStatus() {
    return this.getStringAttribute('jre_security_status');
  }
  public set jreSecurityStatus(value: string) {
    this._jreSecurityStatus = value;
  }
  public resetJreSecurityStatus() {
    this._jreSecurityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jreSecurityStatusInput() {
    return this._jreSecurityStatus;
  }

  // jre_vendor - computed: false, optional: true, required: false
  private _jreVendor?: string; 
  public get jreVendor() {
    return this.getStringAttribute('jre_vendor');
  }
  public set jreVendor(value: string) {
    this._jreVendor = value;
  }
  public resetJreVendor() {
    this._jreVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jreVendorInput() {
    return this._jreVendor;
  }

  // jre_version - computed: false, optional: true, required: false
  private _jreVersion?: string; 
  public get jreVersion() {
    return this.getStringAttribute('jre_version');
  }
  public set jreVersion(value: string) {
    this._jreVersion = value;
  }
  public resetJreVersion() {
    this._jreVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jreVersionInput() {
    return this._jreVersion;
  }

  // managed_instance_id - computed: false, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // os_family - computed: false, optional: true, required: false
  private _osFamily?: string[]; 
  public get osFamily() {
    return this.getListAttribute('os_family');
  }
  public set osFamily(value: string[]) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // path_contains - computed: false, optional: true, required: false
  private _pathContains?: string; 
  public get pathContains() {
    return this.getStringAttribute('path_contains');
  }
  public set pathContains(value: string) {
    this._pathContains = value;
  }
  public resetPathContains() {
    this._pathContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathContainsInput() {
    return this._pathContains;
  }

  // time_end - computed: false, optional: true, required: false
  private _timeEnd?: string; 
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }
  public set timeEnd(value: string) {
    this._timeEnd = value;
  }
  public resetTimeEnd() {
    this._timeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndInput() {
    return this._timeEnd;
  }

  // time_start - computed: false, optional: true, required: false
  private _timeStart?: string; 
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
  public set timeStart(value: string) {
    this._timeStart = value;
  }
  public resetTimeStart() {
    this._timeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartInput() {
    return this._timeStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      installation_path: cdktf.stringToTerraform(this._installationPath),
      jre_distribution: cdktf.stringToTerraform(this._jreDistribution),
      jre_security_status: cdktf.stringToTerraform(this._jreSecurityStatus),
      jre_vendor: cdktf.stringToTerraform(this._jreVendor),
      jre_version: cdktf.stringToTerraform(this._jreVersion),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      os_family: cdktf.listMapper(cdktf.stringToTerraform, false)(this._osFamily),
      path_contains: cdktf.stringToTerraform(this._pathContains),
      time_end: cdktf.stringToTerraform(this._timeEnd),
      time_start: cdktf.stringToTerraform(this._timeStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
      installation_path: {
        value: cdktf.stringToHclTerraform(this._installationPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jre_distribution: {
        value: cdktf.stringToHclTerraform(this._jreDistribution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jre_security_status: {
        value: cdktf.stringToHclTerraform(this._jreSecurityStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jre_vendor: {
        value: cdktf.stringToHclTerraform(this._jreVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jre_version: {
        value: cdktf.stringToHclTerraform(this._jreVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_family: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._osFamily),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      path_contains: {
        value: cdktf.stringToHclTerraform(this._pathContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_end: {
        value: cdktf.stringToHclTerraform(this._timeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_start: {
        value: cdktf.stringToHclTerraform(this._timeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
