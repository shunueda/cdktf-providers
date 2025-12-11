// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbmulticloudOracleDbGcpIdentityConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#compartment_id DbmulticloudOracleDbGcpIdentityConnector#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#defined_tags DbmulticloudOracleDbGcpIdentityConnector#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#display_name DbmulticloudOracleDbGcpIdentityConnector#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#freeform_tags DbmulticloudOracleDbGcpIdentityConnector#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#gcp_location DbmulticloudOracleDbGcpIdentityConnector#gcp_location}
  */
  readonly gcpLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#gcp_resource_service_agent_id DbmulticloudOracleDbGcpIdentityConnector#gcp_resource_service_agent_id}
  */
  readonly gcpResourceServiceAgentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#gcp_workload_identity_pool_id DbmulticloudOracleDbGcpIdentityConnector#gcp_workload_identity_pool_id}
  */
  readonly gcpWorkloadIdentityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#gcp_workload_identity_provider_id DbmulticloudOracleDbGcpIdentityConnector#gcp_workload_identity_provider_id}
  */
  readonly gcpWorkloadIdentityProviderId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#id DbmulticloudOracleDbGcpIdentityConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#issuer_url DbmulticloudOracleDbGcpIdentityConnector#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#project_id DbmulticloudOracleDbGcpIdentityConnector#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#resource_id DbmulticloudOracleDbGcpIdentityConnector#resource_id}
  */
  readonly resourceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#timeouts DbmulticloudOracleDbGcpIdentityConnector#timeouts}
  */
  readonly timeouts?: DbmulticloudOracleDbGcpIdentityConnectorTimeouts;
}
export interface DbmulticloudOracleDbGcpIdentityConnectorGcpNodes {
}

export function dbmulticloudOracleDbGcpIdentityConnectorGcpNodesToTerraform(struct?: DbmulticloudOracleDbGcpIdentityConnectorGcpNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbmulticloudOracleDbGcpIdentityConnectorGcpNodesToHclTerraform(struct?: DbmulticloudOracleDbGcpIdentityConnectorGcpNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbmulticloudOracleDbGcpIdentityConnectorGcpNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbmulticloudOracleDbGcpIdentityConnectorGcpNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbmulticloudOracleDbGcpIdentityConnectorGcpNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_last_checked - computed: true, optional: false, required: false
  public get timeLastChecked() {
    return this.getStringAttribute('time_last_checked');
  }
}

export class DbmulticloudOracleDbGcpIdentityConnectorGcpNodesList extends cdktf.ComplexList {

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
  public get(index: number): DbmulticloudOracleDbGcpIdentityConnectorGcpNodesOutputReference {
    return new DbmulticloudOracleDbGcpIdentityConnectorGcpNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbmulticloudOracleDbGcpIdentityConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#create DbmulticloudOracleDbGcpIdentityConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#delete DbmulticloudOracleDbGcpIdentityConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#update DbmulticloudOracleDbGcpIdentityConnector#update}
  */
  readonly update?: string;
}

export function dbmulticloudOracleDbGcpIdentityConnectorTimeoutsToTerraform(struct?: DbmulticloudOracleDbGcpIdentityConnectorTimeouts | cdktf.IResolvable): any {
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


export function dbmulticloudOracleDbGcpIdentityConnectorTimeoutsToHclTerraform(struct?: DbmulticloudOracleDbGcpIdentityConnectorTimeouts | cdktf.IResolvable): any {
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

export class DbmulticloudOracleDbGcpIdentityConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbmulticloudOracleDbGcpIdentityConnectorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbmulticloudOracleDbGcpIdentityConnectorTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector oci_dbmulticloud_oracle_db_gcp_identity_connector}
*/
export class DbmulticloudOracleDbGcpIdentityConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_gcp_identity_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbmulticloudOracleDbGcpIdentityConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbmulticloudOracleDbGcpIdentityConnector to import
  * @param importFromId The id of the existing DbmulticloudOracleDbGcpIdentityConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbmulticloudOracleDbGcpIdentityConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_gcp_identity_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/dbmulticloud_oracle_db_gcp_identity_connector oci_dbmulticloud_oracle_db_gcp_identity_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbmulticloudOracleDbGcpIdentityConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DbmulticloudOracleDbGcpIdentityConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_gcp_identity_connector',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._gcpLocation = config.gcpLocation;
    this._gcpResourceServiceAgentId = config.gcpResourceServiceAgentId;
    this._gcpWorkloadIdentityPoolId = config.gcpWorkloadIdentityPoolId;
    this._gcpWorkloadIdentityProviderId = config.gcpWorkloadIdentityProviderId;
    this._id = config.id;
    this._issuerUrl = config.issuerUrl;
    this._projectId = config.projectId;
    this._resourceId = config.resourceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // gcp_identity_connectivity_status - computed: true, optional: false, required: false
  public get gcpIdentityConnectivityStatus() {
    return this.getStringAttribute('gcp_identity_connectivity_status');
  }

  // gcp_location - computed: false, optional: false, required: true
  private _gcpLocation?: string; 
  public get gcpLocation() {
    return this.getStringAttribute('gcp_location');
  }
  public set gcpLocation(value: string) {
    this._gcpLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpLocationInput() {
    return this._gcpLocation;
  }

  // gcp_nodes - computed: true, optional: false, required: false
  private _gcpNodes = new DbmulticloudOracleDbGcpIdentityConnectorGcpNodesList(this, "gcp_nodes", false);
  public get gcpNodes() {
    return this._gcpNodes;
  }

  // gcp_resource_service_agent_id - computed: false, optional: false, required: true
  private _gcpResourceServiceAgentId?: string; 
  public get gcpResourceServiceAgentId() {
    return this.getStringAttribute('gcp_resource_service_agent_id');
  }
  public set gcpResourceServiceAgentId(value: string) {
    this._gcpResourceServiceAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpResourceServiceAgentIdInput() {
    return this._gcpResourceServiceAgentId;
  }

  // gcp_workload_identity_pool_id - computed: false, optional: false, required: true
  private _gcpWorkloadIdentityPoolId?: string; 
  public get gcpWorkloadIdentityPoolId() {
    return this.getStringAttribute('gcp_workload_identity_pool_id');
  }
  public set gcpWorkloadIdentityPoolId(value: string) {
    this._gcpWorkloadIdentityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpWorkloadIdentityPoolIdInput() {
    return this._gcpWorkloadIdentityPoolId;
  }

  // gcp_workload_identity_provider_id - computed: false, optional: false, required: true
  private _gcpWorkloadIdentityProviderId?: string; 
  public get gcpWorkloadIdentityProviderId() {
    return this.getStringAttribute('gcp_workload_identity_provider_id');
  }
  public set gcpWorkloadIdentityProviderId(value: string) {
    this._gcpWorkloadIdentityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpWorkloadIdentityProviderIdInput() {
    return this._gcpWorkloadIdentityProviderId;
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

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbmulticloudOracleDbGcpIdentityConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbmulticloudOracleDbGcpIdentityConnectorTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      gcp_location: cdktf.stringToTerraform(this._gcpLocation),
      gcp_resource_service_agent_id: cdktf.stringToTerraform(this._gcpResourceServiceAgentId),
      gcp_workload_identity_pool_id: cdktf.stringToTerraform(this._gcpWorkloadIdentityPoolId),
      gcp_workload_identity_provider_id: cdktf.stringToTerraform(this._gcpWorkloadIdentityProviderId),
      id: cdktf.stringToTerraform(this._id),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      timeouts: dbmulticloudOracleDbGcpIdentityConnectorTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      gcp_location: {
        value: cdktf.stringToHclTerraform(this._gcpLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_resource_service_agent_id: {
        value: cdktf.stringToHclTerraform(this._gcpResourceServiceAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_workload_identity_pool_id: {
        value: cdktf.stringToHclTerraform(this._gcpWorkloadIdentityPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_workload_identity_provider_id: {
        value: cdktf.stringToHclTerraform(this._gcpWorkloadIdentityProviderId),
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
      issuer_url: {
        value: cdktf.stringToHclTerraform(this._issuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dbmulticloudOracleDbGcpIdentityConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbmulticloudOracleDbGcpIdentityConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
