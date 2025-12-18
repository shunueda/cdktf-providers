// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementExternalClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#defined_tags DatabaseManagementExternalCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#external_cluster_id DatabaseManagementExternalCluster#external_cluster_id}
  */
  readonly externalClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#external_connector_id DatabaseManagementExternalCluster#external_connector_id}
  */
  readonly externalConnectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#freeform_tags DatabaseManagementExternalCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#id DatabaseManagementExternalCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#timeouts DatabaseManagementExternalCluster#timeouts}
  */
  readonly timeouts?: DatabaseManagementExternalClusterTimeouts;
}
export interface DatabaseManagementExternalClusterNetworkConfigurations {
}

export function databaseManagementExternalClusterNetworkConfigurationsToTerraform(struct?: DatabaseManagementExternalClusterNetworkConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalClusterNetworkConfigurationsToHclTerraform(struct?: DatabaseManagementExternalClusterNetworkConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalClusterNetworkConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalClusterNetworkConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalClusterNetworkConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_number - computed: true, optional: false, required: false
  public get networkNumber() {
    return this.getNumberAttribute('network_number');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

export class DatabaseManagementExternalClusterNetworkConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalClusterNetworkConfigurationsOutputReference {
    return new DatabaseManagementExternalClusterNetworkConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalClusterScanConfigurations {
}

export function databaseManagementExternalClusterScanConfigurationsToTerraform(struct?: DatabaseManagementExternalClusterScanConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalClusterScanConfigurationsToHclTerraform(struct?: DatabaseManagementExternalClusterScanConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalClusterScanConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalClusterScanConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalClusterScanConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_number - computed: true, optional: false, required: false
  public get networkNumber() {
    return this.getNumberAttribute('network_number');
  }

  // scan_name - computed: true, optional: false, required: false
  public get scanName() {
    return this.getStringAttribute('scan_name');
  }

  // scan_port - computed: true, optional: false, required: false
  public get scanPort() {
    return this.getNumberAttribute('scan_port');
  }

  // scan_protocol - computed: true, optional: false, required: false
  public get scanProtocol() {
    return this.getStringAttribute('scan_protocol');
  }
}

export class DatabaseManagementExternalClusterScanConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalClusterScanConfigurationsOutputReference {
    return new DatabaseManagementExternalClusterScanConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalClusterVipConfigurations {
}

export function databaseManagementExternalClusterVipConfigurationsToTerraform(struct?: DatabaseManagementExternalClusterVipConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseManagementExternalClusterVipConfigurationsToHclTerraform(struct?: DatabaseManagementExternalClusterVipConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseManagementExternalClusterVipConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementExternalClusterVipConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalClusterVipConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // network_number - computed: true, optional: false, required: false
  public get networkNumber() {
    return this.getNumberAttribute('network_number');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class DatabaseManagementExternalClusterVipConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseManagementExternalClusterVipConfigurationsOutputReference {
    return new DatabaseManagementExternalClusterVipConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementExternalClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#create DatabaseManagementExternalCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#delete DatabaseManagementExternalCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#update DatabaseManagementExternalCluster#update}
  */
  readonly update?: string;
}

export function databaseManagementExternalClusterTimeoutsToTerraform(struct?: DatabaseManagementExternalClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseManagementExternalClusterTimeoutsToHclTerraform(struct?: DatabaseManagementExternalClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementExternalClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster oci_database_management_external_cluster}
*/
export class DatabaseManagementExternalCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementExternalCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementExternalCluster to import
  * @param importFromId The id of the existing DatabaseManagementExternalCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementExternalCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_cluster oci_database_management_external_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementExternalClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementExternalClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definedTags = config.definedTags;
    this._externalClusterId = config.externalClusterId;
    this._externalConnectorId = config.externalConnectorId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_details - computed: true, optional: false, required: false
  private _additionalDetails = new cdktf.StringMap(this, "additional_details");
  public get additionalDetails() {
    return this._additionalDetails;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_cluster_id - computed: false, optional: false, required: true
  private _externalClusterId?: string; 
  public get externalClusterId() {
    return this.getStringAttribute('external_cluster_id');
  }
  public set externalClusterId(value: string) {
    this._externalClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterIdInput() {
    return this._externalClusterId;
  }

  // external_connector_id - computed: true, optional: true, required: false
  private _externalConnectorId?: string; 
  public get externalConnectorId() {
    return this.getStringAttribute('external_connector_id');
  }
  public set externalConnectorId(value: string) {
    this._externalConnectorId = value;
  }
  public resetExternalConnectorId() {
    this._externalConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectorIdInput() {
    return this._externalConnectorId;
  }

  // external_db_system_id - computed: true, optional: false, required: false
  public get externalDbSystemId() {
    return this.getStringAttribute('external_db_system_id');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // grid_home - computed: true, optional: false, required: false
  public get gridHome() {
    return this.getStringAttribute('grid_home');
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

  // is_flex_cluster - computed: true, optional: false, required: false
  public get isFlexCluster() {
    return this.getBooleanAttribute('is_flex_cluster');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // network_configurations - computed: true, optional: false, required: false
  private _networkConfigurations = new DatabaseManagementExternalClusterNetworkConfigurationsList(this, "network_configurations", false);
  public get networkConfigurations() {
    return this._networkConfigurations;
  }

  // ocr_file_location - computed: true, optional: false, required: false
  public get ocrFileLocation() {
    return this.getStringAttribute('ocr_file_location');
  }

  // scan_configurations - computed: true, optional: false, required: false
  private _scanConfigurations = new DatabaseManagementExternalClusterScanConfigurationsList(this, "scan_configurations", false);
  public get scanConfigurations() {
    return this._scanConfigurations;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vip_configurations - computed: true, optional: false, required: false
  private _vipConfigurations = new DatabaseManagementExternalClusterVipConfigurationsList(this, "vip_configurations", false);
  public get vipConfigurations() {
    return this._vipConfigurations;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementExternalClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementExternalClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      external_cluster_id: cdktf.stringToTerraform(this._externalClusterId),
      external_connector_id: cdktf.stringToTerraform(this._externalConnectorId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      timeouts: databaseManagementExternalClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_cluster_id: {
        value: cdktf.stringToHclTerraform(this._externalClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_connector_id: {
        value: cdktf.stringToHclTerraform(this._externalConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databaseManagementExternalClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementExternalClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
