// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbmulticloudOracleDbAzureConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#access_token DbmulticloudOracleDbAzureConnector#access_token}
  */
  readonly accessToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#azure_identity_mechanism DbmulticloudOracleDbAzureConnector#azure_identity_mechanism}
  */
  readonly azureIdentityMechanism: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#azure_resource_group DbmulticloudOracleDbAzureConnector#azure_resource_group}
  */
  readonly azureResourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#azure_subscription_id DbmulticloudOracleDbAzureConnector#azure_subscription_id}
  */
  readonly azureSubscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#azure_tenant_id DbmulticloudOracleDbAzureConnector#azure_tenant_id}
  */
  readonly azureTenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#compartment_id DbmulticloudOracleDbAzureConnector#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#db_cluster_resource_id DbmulticloudOracleDbAzureConnector#db_cluster_resource_id}
  */
  readonly dbClusterResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#display_name DbmulticloudOracleDbAzureConnector#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#id DbmulticloudOracleDbAzureConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#last_modification DbmulticloudOracleDbAzureConnector#last_modification}
  */
  readonly lastModification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#lifecycle_state_details DbmulticloudOracleDbAzureConnector#lifecycle_state_details}
  */
  readonly lifecycleStateDetails?: string;
  /**
  * arc_agent_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#arc_agent_nodes DbmulticloudOracleDbAzureConnector#arc_agent_nodes}
  */
  readonly arcAgentNodes?: DbmulticloudOracleDbAzureConnectorArcAgentNodes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#timeouts DbmulticloudOracleDbAzureConnector#timeouts}
  */
  readonly timeouts?: DbmulticloudOracleDbAzureConnectorTimeouts;
}
export interface DbmulticloudOracleDbAzureConnectorArcAgentNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#current_arc_agent_version DbmulticloudOracleDbAzureConnector#current_arc_agent_version}
  */
  readonly currentArcAgentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#host_id DbmulticloudOracleDbAzureConnector#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#host_name DbmulticloudOracleDbAzureConnector#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#status DbmulticloudOracleDbAzureConnector#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#time_last_checked DbmulticloudOracleDbAzureConnector#time_last_checked}
  */
  readonly timeLastChecked?: string;
}

export function dbmulticloudOracleDbAzureConnectorArcAgentNodesToTerraform(struct?: DbmulticloudOracleDbAzureConnectorArcAgentNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_arc_agent_version: cdktf.stringToTerraform(struct!.currentArcAgentVersion),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    status: cdktf.stringToTerraform(struct!.status),
    time_last_checked: cdktf.stringToTerraform(struct!.timeLastChecked),
  }
}


export function dbmulticloudOracleDbAzureConnectorArcAgentNodesToHclTerraform(struct?: DbmulticloudOracleDbAzureConnectorArcAgentNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_arc_agent_version: {
      value: cdktf.stringToHclTerraform(struct!.currentArcAgentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_last_checked: {
      value: cdktf.stringToHclTerraform(struct!.timeLastChecked),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbmulticloudOracleDbAzureConnectorArcAgentNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbmulticloudOracleDbAzureConnectorArcAgentNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentArcAgentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentArcAgentVersion = this._currentArcAgentVersion;
    }
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeLastChecked !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeLastChecked = this._timeLastChecked;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbmulticloudOracleDbAzureConnectorArcAgentNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentArcAgentVersion = undefined;
      this._hostId = undefined;
      this._hostName = undefined;
      this._status = undefined;
      this._timeLastChecked = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentArcAgentVersion = value.currentArcAgentVersion;
      this._hostId = value.hostId;
      this._hostName = value.hostName;
      this._status = value.status;
      this._timeLastChecked = value.timeLastChecked;
    }
  }

  // current_arc_agent_version - computed: true, optional: true, required: false
  private _currentArcAgentVersion?: string; 
  public get currentArcAgentVersion() {
    return this.getStringAttribute('current_arc_agent_version');
  }
  public set currentArcAgentVersion(value: string) {
    this._currentArcAgentVersion = value;
  }
  public resetCurrentArcAgentVersion() {
    this._currentArcAgentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentArcAgentVersionInput() {
    return this._currentArcAgentVersion;
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // time_last_checked - computed: true, optional: true, required: false
  private _timeLastChecked?: string; 
  public get timeLastChecked() {
    return this.getStringAttribute('time_last_checked');
  }
  public set timeLastChecked(value: string) {
    this._timeLastChecked = value;
  }
  public resetTimeLastChecked() {
    this._timeLastChecked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLastCheckedInput() {
    return this._timeLastChecked;
  }
}

export class DbmulticloudOracleDbAzureConnectorArcAgentNodesList extends cdktf.ComplexList {
  public internalValue? : DbmulticloudOracleDbAzureConnectorArcAgentNodes[] | cdktf.IResolvable

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
  public get(index: number): DbmulticloudOracleDbAzureConnectorArcAgentNodesOutputReference {
    return new DbmulticloudOracleDbAzureConnectorArcAgentNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbmulticloudOracleDbAzureConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#create DbmulticloudOracleDbAzureConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#delete DbmulticloudOracleDbAzureConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#update DbmulticloudOracleDbAzureConnector#update}
  */
  readonly update?: string;
}

export function dbmulticloudOracleDbAzureConnectorTimeoutsToTerraform(struct?: DbmulticloudOracleDbAzureConnectorTimeouts | cdktf.IResolvable): any {
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


export function dbmulticloudOracleDbAzureConnectorTimeoutsToHclTerraform(struct?: DbmulticloudOracleDbAzureConnectorTimeouts | cdktf.IResolvable): any {
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

export class DbmulticloudOracleDbAzureConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbmulticloudOracleDbAzureConnectorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbmulticloudOracleDbAzureConnectorTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector oci_dbmulticloud_oracle_db_azure_connector}
*/
export class DbmulticloudOracleDbAzureConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_azure_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbmulticloudOracleDbAzureConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbmulticloudOracleDbAzureConnector to import
  * @param importFromId The id of the existing DbmulticloudOracleDbAzureConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbmulticloudOracleDbAzureConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_azure_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dbmulticloud_oracle_db_azure_connector oci_dbmulticloud_oracle_db_azure_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbmulticloudOracleDbAzureConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DbmulticloudOracleDbAzureConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_azure_connector',
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
    this._accessToken = config.accessToken;
    this._azureIdentityMechanism = config.azureIdentityMechanism;
    this._azureResourceGroup = config.azureResourceGroup;
    this._azureSubscriptionId = config.azureSubscriptionId;
    this._azureTenantId = config.azureTenantId;
    this._compartmentId = config.compartmentId;
    this._dbClusterResourceId = config.dbClusterResourceId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._lastModification = config.lastModification;
    this._lifecycleStateDetails = config.lifecycleStateDetails;
    this._arcAgentNodes.internalValue = config.arcAgentNodes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // azure_identity_connectivity_status - computed: true, optional: false, required: false
  public get azureIdentityConnectivityStatus() {
    return this.getStringAttribute('azure_identity_connectivity_status');
  }

  // azure_identity_mechanism - computed: false, optional: false, required: true
  private _azureIdentityMechanism?: string; 
  public get azureIdentityMechanism() {
    return this.getStringAttribute('azure_identity_mechanism');
  }
  public set azureIdentityMechanism(value: string) {
    this._azureIdentityMechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureIdentityMechanismInput() {
    return this._azureIdentityMechanism;
  }

  // azure_resource_group - computed: false, optional: false, required: true
  private _azureResourceGroup?: string; 
  public get azureResourceGroup() {
    return this.getStringAttribute('azure_resource_group');
  }
  public set azureResourceGroup(value: string) {
    this._azureResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureResourceGroupInput() {
    return this._azureResourceGroup;
  }

  // azure_subscription_id - computed: false, optional: false, required: true
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }
  public set azureSubscriptionId(value: string) {
    this._azureSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // azure_tenant_id - computed: false, optional: false, required: true
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

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

  // db_cluster_resource_id - computed: false, optional: false, required: true
  private _dbClusterResourceId?: string; 
  public get dbClusterResourceId() {
    return this.getStringAttribute('db_cluster_resource_id');
  }
  public set dbClusterResourceId(value: string) {
    this._dbClusterResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterResourceIdInput() {
    return this._dbClusterResourceId;
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

  // last_modification - computed: true, optional: true, required: false
  private _lastModification?: string; 
  public get lastModification() {
    return this.getStringAttribute('last_modification');
  }
  public set lastModification(value: string) {
    this._lastModification = value;
  }
  public resetLastModification() {
    this._lastModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModificationInput() {
    return this._lastModification;
  }

  // lifecycle_state_details - computed: true, optional: true, required: false
  private _lifecycleStateDetails?: string; 
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }
  public set lifecycleStateDetails(value: string) {
    this._lifecycleStateDetails = value;
  }
  public resetLifecycleStateDetails() {
    this._lifecycleStateDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStateDetailsInput() {
    return this._lifecycleStateDetails;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // arc_agent_nodes - computed: false, optional: true, required: false
  private _arcAgentNodes = new DbmulticloudOracleDbAzureConnectorArcAgentNodesList(this, "arc_agent_nodes", false);
  public get arcAgentNodes() {
    return this._arcAgentNodes;
  }
  public putArcAgentNodes(value: DbmulticloudOracleDbAzureConnectorArcAgentNodes[] | cdktf.IResolvable) {
    this._arcAgentNodes.internalValue = value;
  }
  public resetArcAgentNodes() {
    this._arcAgentNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arcAgentNodesInput() {
    return this._arcAgentNodes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbmulticloudOracleDbAzureConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbmulticloudOracleDbAzureConnectorTimeouts) {
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      azure_identity_mechanism: cdktf.stringToTerraform(this._azureIdentityMechanism),
      azure_resource_group: cdktf.stringToTerraform(this._azureResourceGroup),
      azure_subscription_id: cdktf.stringToTerraform(this._azureSubscriptionId),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      db_cluster_resource_id: cdktf.stringToTerraform(this._dbClusterResourceId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      last_modification: cdktf.stringToTerraform(this._lastModification),
      lifecycle_state_details: cdktf.stringToTerraform(this._lifecycleStateDetails),
      arc_agent_nodes: cdktf.listMapper(dbmulticloudOracleDbAzureConnectorArcAgentNodesToTerraform, true)(this._arcAgentNodes.internalValue),
      timeouts: dbmulticloudOracleDbAzureConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_identity_mechanism: {
        value: cdktf.stringToHclTerraform(this._azureIdentityMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_resource_group: {
        value: cdktf.stringToHclTerraform(this._azureResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_subscription_id: {
        value: cdktf.stringToHclTerraform(this._azureSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_resource_id: {
        value: cdktf.stringToHclTerraform(this._dbClusterResourceId),
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
      last_modification: {
        value: cdktf.stringToHclTerraform(this._lastModification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_state_details: {
        value: cdktf.stringToHclTerraform(this._lifecycleStateDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arc_agent_nodes: {
        value: cdktf.listMapperHcl(dbmulticloudOracleDbAzureConnectorArcAgentNodesToHclTerraform, true)(this._arcAgentNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbmulticloudOracleDbAzureConnectorArcAgentNodesList",
      },
      timeouts: {
        value: dbmulticloudOracleDbAzureConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbmulticloudOracleDbAzureConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
