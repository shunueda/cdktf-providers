// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeTargetDatabasePeerTargetDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#dataguard_association_id DataSafeTargetDatabasePeerTargetDatabase#dataguard_association_id}
  */
  readonly dataguardAssociationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#description DataSafeTargetDatabasePeerTargetDatabase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#display_name DataSafeTargetDatabasePeerTargetDatabase#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#id DataSafeTargetDatabasePeerTargetDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#target_database_id DataSafeTargetDatabasePeerTargetDatabase#target_database_id}
  */
  readonly targetDatabaseId: string;
  /**
  * database_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#database_details DataSafeTargetDatabasePeerTargetDatabase#database_details}
  */
  readonly databaseDetails: DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#timeouts DataSafeTargetDatabasePeerTargetDatabase#timeouts}
  */
  readonly timeouts?: DataSafeTargetDatabasePeerTargetDatabaseTimeouts;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#tls_config DataSafeTargetDatabasePeerTargetDatabase#tls_config}
  */
  readonly tlsConfig?: DataSafeTargetDatabasePeerTargetDatabaseTlsConfig;
}
export interface DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#autonomous_database_id DataSafeTargetDatabasePeerTargetDatabase#autonomous_database_id}
  */
  readonly autonomousDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#database_type DataSafeTargetDatabasePeerTargetDatabase#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#db_system_id DataSafeTargetDatabasePeerTargetDatabase#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#infrastructure_type DataSafeTargetDatabasePeerTargetDatabase#infrastructure_type}
  */
  readonly infrastructureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#instance_id DataSafeTargetDatabasePeerTargetDatabase#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#ip_addresses DataSafeTargetDatabasePeerTargetDatabase#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#listener_port DataSafeTargetDatabasePeerTargetDatabase#listener_port}
  */
  readonly listenerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#pluggable_database_id DataSafeTargetDatabasePeerTargetDatabase#pluggable_database_id}
  */
  readonly pluggableDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#service_name DataSafeTargetDatabasePeerTargetDatabase#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#vm_cluster_id DataSafeTargetDatabasePeerTargetDatabase#vm_cluster_id}
  */
  readonly vmClusterId?: string;
}

export function dataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsToTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference | DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_database_id: cdktf.stringToTerraform(struct!.autonomousDatabaseId),
    database_type: cdktf.stringToTerraform(struct!.databaseType),
    db_system_id: cdktf.stringToTerraform(struct!.dbSystemId),
    infrastructure_type: cdktf.stringToTerraform(struct!.infrastructureType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    listener_port: cdktf.numberToTerraform(struct!.listenerPort),
    pluggable_database_id: cdktf.stringToTerraform(struct!.pluggableDatabaseId),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    vm_cluster_id: cdktf.stringToTerraform(struct!.vmClusterId),
  }
}


export function dataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsToHclTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference | DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_database_id: {
      value: cdktf.stringToHclTerraform(struct!.autonomousDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_system_id: {
      value: cdktf.stringToHclTerraform(struct!.dbSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_type: {
      value: cdktf.stringToHclTerraform(struct!.infrastructureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    listener_port: {
      value: cdktf.numberToHclTerraform(struct!.listenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pluggable_database_id: {
      value: cdktf.stringToHclTerraform(struct!.pluggableDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.vmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousDatabaseId = this._autonomousDatabaseId;
    }
    if (this._databaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseType = this._databaseType;
    }
    if (this._dbSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemId = this._dbSystemId;
    }
    if (this._infrastructureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureType = this._infrastructureType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    if (this._pluggableDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluggableDatabaseId = this._pluggableDatabaseId;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._vmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmClusterId = this._vmClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autonomousDatabaseId = undefined;
      this._databaseType = undefined;
      this._dbSystemId = undefined;
      this._infrastructureType = undefined;
      this._instanceId = undefined;
      this._ipAddresses = undefined;
      this._listenerPort = undefined;
      this._pluggableDatabaseId = undefined;
      this._serviceName = undefined;
      this._vmClusterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autonomousDatabaseId = value.autonomousDatabaseId;
      this._databaseType = value.databaseType;
      this._dbSystemId = value.dbSystemId;
      this._infrastructureType = value.infrastructureType;
      this._instanceId = value.instanceId;
      this._ipAddresses = value.ipAddresses;
      this._listenerPort = value.listenerPort;
      this._pluggableDatabaseId = value.pluggableDatabaseId;
      this._serviceName = value.serviceName;
      this._vmClusterId = value.vmClusterId;
    }
  }

  // autonomous_database_id - computed: true, optional: true, required: false
  private _autonomousDatabaseId?: string; 
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }
  public resetAutonomousDatabaseId() {
    this._autonomousDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseIdInput() {
    return this._autonomousDatabaseId;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // db_system_id - computed: true, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // infrastructure_type - computed: false, optional: false, required: true
  private _infrastructureType?: string; 
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }
  public set infrastructureType(value: string) {
    this._infrastructureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureTypeInput() {
    return this._infrastructureType;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // listener_port - computed: true, optional: true, required: false
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  public resetListenerPort() {
    this._listenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // pluggable_database_id - computed: true, optional: true, required: false
  private _pluggableDatabaseId?: string; 
  public get pluggableDatabaseId() {
    return this.getStringAttribute('pluggable_database_id');
  }
  public set pluggableDatabaseId(value: string) {
    this._pluggableDatabaseId = value;
  }
  public resetPluggableDatabaseId() {
    this._pluggableDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabaseIdInput() {
    return this._pluggableDatabaseId;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // vm_cluster_id - computed: true, optional: true, required: false
  private _vmClusterId?: string; 
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }
  public resetVmClusterId() {
    this._vmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterIdInput() {
    return this._vmClusterId;
  }
}
export interface DataSafeTargetDatabasePeerTargetDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#create DataSafeTargetDatabasePeerTargetDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#delete DataSafeTargetDatabasePeerTargetDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#update DataSafeTargetDatabasePeerTargetDatabase#update}
  */
  readonly update?: string;
}

export function dataSafeTargetDatabasePeerTargetDatabaseTimeoutsToTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseTimeouts | cdktf.IResolvable): any {
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


export function dataSafeTargetDatabasePeerTargetDatabaseTimeoutsToHclTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseTimeouts | cdktf.IResolvable): any {
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

export class DataSafeTargetDatabasePeerTargetDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeTargetDatabasePeerTargetDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeTargetDatabasePeerTargetDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataSafeTargetDatabasePeerTargetDatabaseTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#certificate_store_type DataSafeTargetDatabasePeerTargetDatabase#certificate_store_type}
  */
  readonly certificateStoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#key_store_content DataSafeTargetDatabasePeerTargetDatabase#key_store_content}
  */
  readonly keyStoreContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#status DataSafeTargetDatabasePeerTargetDatabase#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#store_password DataSafeTargetDatabasePeerTargetDatabase#store_password}
  */
  readonly storePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#trust_store_content DataSafeTargetDatabasePeerTargetDatabase#trust_store_content}
  */
  readonly trustStoreContent?: string;
}

export function dataSafeTargetDatabasePeerTargetDatabaseTlsConfigToTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference | DataSafeTargetDatabasePeerTargetDatabaseTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store_type: cdktf.stringToTerraform(struct!.certificateStoreType),
    key_store_content: cdktf.stringToTerraform(struct!.keyStoreContent),
    status: cdktf.stringToTerraform(struct!.status),
    store_password: cdktf.stringToTerraform(struct!.storePassword),
    trust_store_content: cdktf.stringToTerraform(struct!.trustStoreContent),
  }
}


export function dataSafeTargetDatabasePeerTargetDatabaseTlsConfigToHclTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference | DataSafeTargetDatabasePeerTargetDatabaseTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_store_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_content: {
      value: cdktf.stringToHclTerraform(struct!.keyStoreContent),
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
    store_password: {
      value: cdktf.stringToHclTerraform(struct!.storePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_content: {
      value: cdktf.stringToHclTerraform(struct!.trustStoreContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabasePeerTargetDatabaseTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStoreType = this._certificateStoreType;
    }
    if (this._keyStoreContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreContent = this._keyStoreContent;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._storePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.storePassword = this._storePassword;
    }
    if (this._trustStoreContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreContent = this._trustStoreContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabasePeerTargetDatabaseTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateStoreType = undefined;
      this._keyStoreContent = undefined;
      this._status = undefined;
      this._storePassword = undefined;
      this._trustStoreContent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateStoreType = value.certificateStoreType;
      this._keyStoreContent = value.keyStoreContent;
      this._status = value.status;
      this._storePassword = value.storePassword;
      this._trustStoreContent = value.trustStoreContent;
    }
  }

  // certificate_store_type - computed: true, optional: true, required: false
  private _certificateStoreType?: string; 
  public get certificateStoreType() {
    return this.getStringAttribute('certificate_store_type');
  }
  public set certificateStoreType(value: string) {
    this._certificateStoreType = value;
  }
  public resetCertificateStoreType() {
    this._certificateStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreTypeInput() {
    return this._certificateStoreType;
  }

  // key_store_content - computed: true, optional: true, required: false
  private _keyStoreContent?: string; 
  public get keyStoreContent() {
    return this.getStringAttribute('key_store_content');
  }
  public set keyStoreContent(value: string) {
    this._keyStoreContent = value;
  }
  public resetKeyStoreContent() {
    this._keyStoreContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreContentInput() {
    return this._keyStoreContent;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // store_password - computed: true, optional: true, required: false
  private _storePassword?: string; 
  public get storePassword() {
    return this.getStringAttribute('store_password');
  }
  public set storePassword(value: string) {
    this._storePassword = value;
  }
  public resetStorePassword() {
    this._storePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storePasswordInput() {
    return this._storePassword;
  }

  // trust_store_content - computed: true, optional: true, required: false
  private _trustStoreContent?: string; 
  public get trustStoreContent() {
    return this.getStringAttribute('trust_store_content');
  }
  public set trustStoreContent(value: string) {
    this._trustStoreContent = value;
  }
  public resetTrustStoreContent() {
    this._trustStoreContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreContentInput() {
    return this._trustStoreContent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database oci_data_safe_target_database_peer_target_database}
*/
export class DataSafeTargetDatabasePeerTargetDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_target_database_peer_target_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeTargetDatabasePeerTargetDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeTargetDatabasePeerTargetDatabase to import
  * @param importFromId The id of the existing DataSafeTargetDatabasePeerTargetDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeTargetDatabasePeerTargetDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_target_database_peer_target_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_target_database_peer_target_database oci_data_safe_target_database_peer_target_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeTargetDatabasePeerTargetDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeTargetDatabasePeerTargetDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_target_database_peer_target_database',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataguardAssociationId = config.dataguardAssociationId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._targetDatabaseId = config.targetDatabaseId;
    this._databaseDetails.internalValue = config.databaseDetails;
    this._timeouts.internalValue = config.timeouts;
    this._tlsConfig.internalValue = config.tlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_unique_name - computed: true, optional: false, required: false
  public get databaseUniqueName() {
    return this.getStringAttribute('database_unique_name');
  }

  // dataguard_association_id - computed: true, optional: true, required: false
  private _dataguardAssociationId?: string; 
  public get dataguardAssociationId() {
    return this.getStringAttribute('dataguard_association_id');
  }
  public set dataguardAssociationId(value: string) {
    this._dataguardAssociationId = value;
  }
  public resetDataguardAssociationId() {
    this._dataguardAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataguardAssociationIdInput() {
    return this._dataguardAssociationId;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_database_id - computed: false, optional: false, required: true
  private _targetDatabaseId?: string; 
  public get targetDatabaseId() {
    return this.getStringAttribute('target_database_id');
  }
  public set targetDatabaseId(value: string) {
    this._targetDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseIdInput() {
    return this._targetDatabaseId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // database_details - computed: false, optional: false, required: true
  private _databaseDetails = new DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference(this, "database_details");
  public get databaseDetails() {
    return this._databaseDetails;
  }
  public putDatabaseDetails(value: DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails) {
    this._databaseDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseDetailsInput() {
    return this._databaseDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeTargetDatabasePeerTargetDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeTargetDatabasePeerTargetDatabaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataSafeTargetDatabasePeerTargetDatabaseTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataguard_association_id: cdktf.stringToTerraform(this._dataguardAssociationId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      target_database_id: cdktf.stringToTerraform(this._targetDatabaseId),
      database_details: dataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsToTerraform(this._databaseDetails.internalValue),
      timeouts: dataSafeTargetDatabasePeerTargetDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
      tls_config: dataSafeTargetDatabasePeerTargetDatabaseTlsConfigToTerraform(this._tlsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataguard_association_id: {
        value: cdktf.stringToHclTerraform(this._dataguardAssociationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      target_database_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_details: {
        value: dataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsToHclTerraform(this._databaseDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList",
      },
      timeouts: {
        value: dataSafeTargetDatabasePeerTargetDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeTargetDatabasePeerTargetDatabaseTimeouts",
      },
      tls_config: {
        value: dataSafeTargetDatabasePeerTargetDatabaseTlsConfigToHclTerraform(this._tlsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeTargetDatabasePeerTargetDatabaseTlsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
