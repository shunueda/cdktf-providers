// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzurePostgresqlFlexibleDatabaseV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Whether Active Directory authentication is allowed to access the PostgreSQL Flexible Server Defaults to `Disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#active_directory_authentication AzurePostgresqlFlexibleDatabaseV2#active_directory_authentication}
  */
  readonly activeDirectoryAuthentication?: string;
  /**
  * The Administrator Login for the PostgreSQL Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#administrator_login AzurePostgresqlFlexibleDatabaseV2#administrator_login}
  */
  readonly administratorLogin: string;
  /**
  * The Password associated with the `administrator_login` for the PostgreSQL Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#administrator_login_password AzurePostgresqlFlexibleDatabaseV2#administrator_login_password}
  */
  readonly administratorLoginPassword: string;
  /**
  * The Azure Availability Zone where the primary PostgreSQL Flexible Server will be deployed. It enables zone-level redundancy for increased fault tolerance. When High Availability (HA) is enabled in ZoneRedundant mode, the standby replica is automatically placed in a different zone. Valid values are `1`, `2`, or `3`, depending on the region's supported zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#availability_zone AzurePostgresqlFlexibleDatabaseV2#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Backup retention days for the server, supported values are between `7` and `35` days. Note: Updation allowed on updating with higher retention days value from current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#backup_retention_days AzurePostgresqlFlexibleDatabaseV2#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * The ID of the virtual network subnet to create the PostgreSQL Flexible Server. The provided subnet should not have any other resource deployed in it and this subnet will be delegated to the PostgreSQL Flexible Server, if not already delegated. Changing this forces a new PostgreSQL Flexible Server to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#delegated_subnet_id AzurePostgresqlFlexibleDatabaseV2#delegated_subnet_id}
  */
  readonly delegatedSubnetId?: string;
  /**
  * Turn Geo-redundant server backups Enabled/Disabled. To enable or disable geo_redundant_backup resource need to be recreated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#geo_redundant_backup AzurePostgresqlFlexibleDatabaseV2#geo_redundant_backup}
  */
  readonly geoRedundantBackup?: string;
  /**
  * Specify compute based on service tier by prepending Standard_ keyword from following document https://azure.microsoft.com/en-in/pricing/details/postgresql/flexible-server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#hardware AzurePostgresqlFlexibleDatabaseV2#hardware}
  */
  readonly hardware: string;
  /**
  * High availability options— Disabled, SameZone, and ZoneRedundant — are applicable if the service tier is set to GeneralPurpose or MemoryOptimized. Defaults to `Disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#high_availability AzurePostgresqlFlexibleDatabaseV2#high_availability}
  */
  readonly highAvailability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#id AzurePostgresqlFlexibleDatabaseV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Minor version Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#minor_version AzurePostgresqlFlexibleDatabaseV2#minor_version}
  */
  readonly minorVersion?: string;
  /**
  * Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#name AzurePostgresqlFlexibleDatabaseV2#name}
  */
  readonly name: string;
  /**
  * Whether password authentication is allowed to access the PostgreSQL Flexible Server Defaults to `Enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#password_authentication AzurePostgresqlFlexibleDatabaseV2#password_authentication}
  */
  readonly passwordAuthentication?: string;
  /**
  * The ID of the private DNS zone to create the PostgreSQL Flexible Server. The private_dns_zone_id will be required when setting a delegated_subnet_id. For existing flexible servers who don't want to be recreated, you need to provide the private_dns_zone_id to the service team to manually migrate to the specified private DNS zone. The azurerm_private_dns_zone should end with suffix .postgres.database.azure.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#private_dns_zone_id AzurePostgresqlFlexibleDatabaseV2#private_dns_zone_id}
  */
  readonly privateDnsZoneId?: string;
  /**
  * Whether public network access is allowed for this server. Defaults to `Enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#public_network_access AzurePostgresqlFlexibleDatabaseV2#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * Specify service_tier among `Burstable`, `GeneralPurpose` or `MemoryOptimized`. Note: should disable high_availability before updating to Burstable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#service_tier AzurePostgresqlFlexibleDatabaseV2#service_tier}
  */
  readonly serviceTier: string;
  /**
  * Max storage allowed for a server. Possible values are `32`,`64`,`128`,`256`,`512`,`1024`,`2048`,`4096`,`8192`,`16384`,`32768` GB. Note: Updation allowed on updating with higher storage size from current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#storage_gb AzurePostgresqlFlexibleDatabaseV2#storage_gb}
  */
  readonly storageGb?: number;
  /**
  * The GUID of the tenant that the azure postgresql database will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#tenant_id AzurePostgresqlFlexibleDatabaseV2#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Specifies the version of PostgreSQL Flexible DB to use. Valid values are `16`,`15`,`14`,`13`,`12`,`11`. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#version AzurePostgresqlFlexibleDatabaseV2#version}
  */
  readonly version: string;
  /**
  * Whether or not to wait until PostgreSQL Server instance to be ready, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#wait_until_ready AzurePostgresqlFlexibleDatabaseV2#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#timeouts AzurePostgresqlFlexibleDatabaseV2#timeouts}
  */
  readonly timeouts?: AzurePostgresqlFlexibleDatabaseV2Timeouts;
}
export interface AzurePostgresqlFlexibleDatabaseV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#create AzurePostgresqlFlexibleDatabaseV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#delete AzurePostgresqlFlexibleDatabaseV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#update AzurePostgresqlFlexibleDatabaseV2#update}
  */
  readonly update?: string;
}

export function azurePostgresqlFlexibleDatabaseV2TimeoutsToTerraform(struct?: AzurePostgresqlFlexibleDatabaseV2Timeouts | cdktf.IResolvable): any {
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


export function azurePostgresqlFlexibleDatabaseV2TimeoutsToHclTerraform(struct?: AzurePostgresqlFlexibleDatabaseV2Timeouts | cdktf.IResolvable): any {
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

export class AzurePostgresqlFlexibleDatabaseV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzurePostgresqlFlexibleDatabaseV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzurePostgresqlFlexibleDatabaseV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2 duplocloud_azure_postgresql_flexible_database_v2}
*/
export class AzurePostgresqlFlexibleDatabaseV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_postgresql_flexible_database_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzurePostgresqlFlexibleDatabaseV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzurePostgresqlFlexibleDatabaseV2 to import
  * @param importFromId The id of the existing AzurePostgresqlFlexibleDatabaseV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzurePostgresqlFlexibleDatabaseV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_postgresql_flexible_database_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_postgresql_flexible_database_v2 duplocloud_azure_postgresql_flexible_database_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzurePostgresqlFlexibleDatabaseV2Config
  */
  public constructor(scope: Construct, id: string, config: AzurePostgresqlFlexibleDatabaseV2Config) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_postgresql_flexible_database_v2',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeDirectoryAuthentication = config.activeDirectoryAuthentication;
    this._administratorLogin = config.administratorLogin;
    this._administratorLoginPassword = config.administratorLoginPassword;
    this._availabilityZone = config.availabilityZone;
    this._backupRetentionDays = config.backupRetentionDays;
    this._delegatedSubnetId = config.delegatedSubnetId;
    this._geoRedundantBackup = config.geoRedundantBackup;
    this._hardware = config.hardware;
    this._highAvailability = config.highAvailability;
    this._id = config.id;
    this._minorVersion = config.minorVersion;
    this._name = config.name;
    this._passwordAuthentication = config.passwordAuthentication;
    this._privateDnsZoneId = config.privateDnsZoneId;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._serviceTier = config.serviceTier;
    this._storageGb = config.storageGb;
    this._tenantId = config.tenantId;
    this._version = config.version;
    this._waitUntilReady = config.waitUntilReady;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory_authentication - computed: false, optional: true, required: false
  private _activeDirectoryAuthentication?: string; 
  public get activeDirectoryAuthentication() {
    return this.getStringAttribute('active_directory_authentication');
  }
  public set activeDirectoryAuthentication(value: string) {
    this._activeDirectoryAuthentication = value;
  }
  public resetActiveDirectoryAuthentication() {
    this._activeDirectoryAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryAuthenticationInput() {
    return this._activeDirectoryAuthentication;
  }

  // active_directory_tenant_id - computed: true, optional: false, required: false
  public get activeDirectoryTenantId() {
    return this.getStringAttribute('active_directory_tenant_id');
  }

  // administrator_login - computed: false, optional: false, required: true
  private _administratorLogin?: string; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin;
  }

  // administrator_login_password - computed: false, optional: false, required: true
  private _administratorLoginPassword?: string; 
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }
  public set administratorLoginPassword(value: string) {
    this._administratorLoginPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginPasswordInput() {
    return this._administratorLoginPassword;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // azure_resource_id - computed: true, optional: false, required: false
  public get azureResourceId() {
    return this.getStringAttribute('azure_resource_id');
  }

  // backup_retention_days - computed: true, optional: true, required: false
  private _backupRetentionDays?: number; 
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays;
  }

  // delegated_subnet_id - computed: false, optional: true, required: false
  private _delegatedSubnetId?: string; 
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }
  public set delegatedSubnetId(value: string) {
    this._delegatedSubnetId = value;
  }
  public resetDelegatedSubnetId() {
    this._delegatedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedSubnetIdInput() {
    return this._delegatedSubnetId;
  }

  // fully_qualified_domain_name - computed: true, optional: false, required: false
  public get fullyQualifiedDomainName() {
    return this.getStringAttribute('fully_qualified_domain_name');
  }

  // geo_redundant_backup - computed: true, optional: true, required: false
  private _geoRedundantBackup?: string; 
  public get geoRedundantBackup() {
    return this.getStringAttribute('geo_redundant_backup');
  }
  public set geoRedundantBackup(value: string) {
    this._geoRedundantBackup = value;
  }
  public resetGeoRedundantBackup() {
    this._geoRedundantBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRedundantBackupInput() {
    return this._geoRedundantBackup;
  }

  // hardware - computed: false, optional: false, required: true
  private _hardware?: string; 
  public get hardware() {
    return this.getStringAttribute('hardware');
  }
  public set hardware(value: string) {
    this._hardware = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: string; 
  public get highAvailability() {
    return this.getStringAttribute('high_availability');
  }
  public set highAvailability(value: string) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // minor_version - computed: false, optional: true, required: false
  private _minorVersion?: string; 
  public get minorVersion() {
    return this.getStringAttribute('minor_version');
  }
  public set minorVersion(value: string) {
    this._minorVersion = value;
  }
  public resetMinorVersion() {
    this._minorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionInput() {
    return this._minorVersion;
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

  // password_authentication - computed: false, optional: true, required: false
  private _passwordAuthentication?: string; 
  public get passwordAuthentication() {
    return this.getStringAttribute('password_authentication');
  }
  public set passwordAuthentication(value: string) {
    this._passwordAuthentication = value;
  }
  public resetPasswordAuthentication() {
    this._passwordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationInput() {
    return this._passwordAuthentication;
  }

  // private_connection_endpoints - computed: true, optional: false, required: false
  public get privateConnectionEndpoints() {
    return this.getListAttribute('private_connection_endpoints');
  }

  // private_dns_zone_id - computed: false, optional: true, required: false
  private _privateDnsZoneId?: string; 
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }
  public set privateDnsZoneId(value: string) {
    this._privateDnsZoneId = value;
  }
  public resetPrivateDnsZoneId() {
    this._privateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdInput() {
    return this._privateDnsZoneId;
  }

  // public_network_access - computed: false, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
  }

  // service_tier - computed: false, optional: false, required: true
  private _serviceTier?: string; 
  public get serviceTier() {
    return this.getStringAttribute('service_tier');
  }
  public set serviceTier(value: string) {
    this._serviceTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTierInput() {
    return this._serviceTier;
  }

  // storage_gb - computed: true, optional: true, required: false
  private _storageGb?: number; 
  public get storageGb() {
    return this.getNumberAttribute('storage_gb');
  }
  public set storageGb(value: number) {
    this._storageGb = value;
  }
  public resetStorageGb() {
    this._storageGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageGbInput() {
    return this._storageGb;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady?: boolean | cdktf.IResolvable; 
  public get waitUntilReady() {
    return this.getBooleanAttribute('wait_until_ready');
  }
  public set waitUntilReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilReady = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzurePostgresqlFlexibleDatabaseV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzurePostgresqlFlexibleDatabaseV2Timeouts) {
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
      active_directory_authentication: cdktf.stringToTerraform(this._activeDirectoryAuthentication),
      administrator_login: cdktf.stringToTerraform(this._administratorLogin),
      administrator_login_password: cdktf.stringToTerraform(this._administratorLoginPassword),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      backup_retention_days: cdktf.numberToTerraform(this._backupRetentionDays),
      delegated_subnet_id: cdktf.stringToTerraform(this._delegatedSubnetId),
      geo_redundant_backup: cdktf.stringToTerraform(this._geoRedundantBackup),
      hardware: cdktf.stringToTerraform(this._hardware),
      high_availability: cdktf.stringToTerraform(this._highAvailability),
      id: cdktf.stringToTerraform(this._id),
      minor_version: cdktf.stringToTerraform(this._minorVersion),
      name: cdktf.stringToTerraform(this._name),
      password_authentication: cdktf.stringToTerraform(this._passwordAuthentication),
      private_dns_zone_id: cdktf.stringToTerraform(this._privateDnsZoneId),
      public_network_access: cdktf.stringToTerraform(this._publicNetworkAccess),
      service_tier: cdktf.stringToTerraform(this._serviceTier),
      storage_gb: cdktf.numberToTerraform(this._storageGb),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      version: cdktf.stringToTerraform(this._version),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      timeouts: azurePostgresqlFlexibleDatabaseV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_directory_authentication: {
        value: cdktf.stringToHclTerraform(this._activeDirectoryAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator_login: {
        value: cdktf.stringToHclTerraform(this._administratorLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator_login_password: {
        value: cdktf.stringToHclTerraform(this._administratorLoginPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_days: {
        value: cdktf.numberToHclTerraform(this._backupRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delegated_subnet_id: {
        value: cdktf.stringToHclTerraform(this._delegatedSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_redundant_backup: {
        value: cdktf.stringToHclTerraform(this._geoRedundantBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware: {
        value: cdktf.stringToHclTerraform(this._hardware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_availability: {
        value: cdktf.stringToHclTerraform(this._highAvailability),
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
      minor_version: {
        value: cdktf.stringToHclTerraform(this._minorVersion),
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
      password_authentication: {
        value: cdktf.stringToHclTerraform(this._passwordAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_dns_zone_id: {
        value: cdktf.stringToHclTerraform(this._privateDnsZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access: {
        value: cdktf.stringToHclTerraform(this._publicNetworkAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_tier: {
        value: cdktf.stringToHclTerraform(this._serviceTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_gb: {
        value: cdktf.numberToHclTerraform(this._storageGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: azurePostgresqlFlexibleDatabaseV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzurePostgresqlFlexibleDatabaseV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
