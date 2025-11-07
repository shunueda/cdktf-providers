// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsMigrationJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#checkpoint DtsMigrationJob#checkpoint}
  */
  readonly checkpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#data_initialization DtsMigrationJob#data_initialization}
  */
  readonly dataInitialization: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#data_synchronization DtsMigrationJob#data_synchronization}
  */
  readonly dataSynchronization: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#db_list DtsMigrationJob#db_list}
  */
  readonly dbList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_database_name DtsMigrationJob#destination_endpoint_database_name}
  */
  readonly destinationEndpointDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_engine_name DtsMigrationJob#destination_endpoint_engine_name}
  */
  readonly destinationEndpointEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_instance_id DtsMigrationJob#destination_endpoint_instance_id}
  */
  readonly destinationEndpointInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_instance_type DtsMigrationJob#destination_endpoint_instance_type}
  */
  readonly destinationEndpointInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_ip DtsMigrationJob#destination_endpoint_ip}
  */
  readonly destinationEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_oracle_sid DtsMigrationJob#destination_endpoint_oracle_sid}
  */
  readonly destinationEndpointOracleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_password DtsMigrationJob#destination_endpoint_password}
  */
  readonly destinationEndpointPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_port DtsMigrationJob#destination_endpoint_port}
  */
  readonly destinationEndpointPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_region DtsMigrationJob#destination_endpoint_region}
  */
  readonly destinationEndpointRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#destination_endpoint_user_name DtsMigrationJob#destination_endpoint_user_name}
  */
  readonly destinationEndpointUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#dts_instance_id DtsMigrationJob#dts_instance_id}
  */
  readonly dtsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#dts_job_name DtsMigrationJob#dts_job_name}
  */
  readonly dtsJobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#id DtsMigrationJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#instance_class DtsMigrationJob#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_database_name DtsMigrationJob#source_endpoint_database_name}
  */
  readonly sourceEndpointDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_engine_name DtsMigrationJob#source_endpoint_engine_name}
  */
  readonly sourceEndpointEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_instance_id DtsMigrationJob#source_endpoint_instance_id}
  */
  readonly sourceEndpointInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_instance_type DtsMigrationJob#source_endpoint_instance_type}
  */
  readonly sourceEndpointInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_ip DtsMigrationJob#source_endpoint_ip}
  */
  readonly sourceEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_oracle_sid DtsMigrationJob#source_endpoint_oracle_sid}
  */
  readonly sourceEndpointOracleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_owner_id DtsMigrationJob#source_endpoint_owner_id}
  */
  readonly sourceEndpointOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_password DtsMigrationJob#source_endpoint_password}
  */
  readonly sourceEndpointPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_port DtsMigrationJob#source_endpoint_port}
  */
  readonly sourceEndpointPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_region DtsMigrationJob#source_endpoint_region}
  */
  readonly sourceEndpointRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_role DtsMigrationJob#source_endpoint_role}
  */
  readonly sourceEndpointRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#source_endpoint_user_name DtsMigrationJob#source_endpoint_user_name}
  */
  readonly sourceEndpointUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#status DtsMigrationJob#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#structure_initialization DtsMigrationJob#structure_initialization}
  */
  readonly structureInitialization: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#timeouts DtsMigrationJob#timeouts}
  */
  readonly timeouts?: DtsMigrationJobTimeouts;
}
export interface DtsMigrationJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#create DtsMigrationJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#update DtsMigrationJob#update}
  */
  readonly update?: string;
}

export function dtsMigrationJobTimeoutsToTerraform(struct?: DtsMigrationJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dtsMigrationJobTimeoutsToHclTerraform(struct?: DtsMigrationJobTimeouts | cdktf.IResolvable): any {
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

export class DtsMigrationJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DtsMigrationJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsMigrationJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job alicloud_dts_migration_job}
*/
export class DtsMigrationJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dts_migration_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsMigrationJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsMigrationJob to import
  * @param importFromId The id of the existing DtsMigrationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsMigrationJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dts_migration_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_migration_job alicloud_dts_migration_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsMigrationJobConfig
  */
  public constructor(scope: Construct, id: string, config: DtsMigrationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dts_migration_job',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkpoint = config.checkpoint;
    this._dataInitialization = config.dataInitialization;
    this._dataSynchronization = config.dataSynchronization;
    this._dbList = config.dbList;
    this._destinationEndpointDatabaseName = config.destinationEndpointDatabaseName;
    this._destinationEndpointEngineName = config.destinationEndpointEngineName;
    this._destinationEndpointInstanceId = config.destinationEndpointInstanceId;
    this._destinationEndpointInstanceType = config.destinationEndpointInstanceType;
    this._destinationEndpointIp = config.destinationEndpointIp;
    this._destinationEndpointOracleSid = config.destinationEndpointOracleSid;
    this._destinationEndpointPassword = config.destinationEndpointPassword;
    this._destinationEndpointPort = config.destinationEndpointPort;
    this._destinationEndpointRegion = config.destinationEndpointRegion;
    this._destinationEndpointUserName = config.destinationEndpointUserName;
    this._dtsInstanceId = config.dtsInstanceId;
    this._dtsJobName = config.dtsJobName;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._sourceEndpointDatabaseName = config.sourceEndpointDatabaseName;
    this._sourceEndpointEngineName = config.sourceEndpointEngineName;
    this._sourceEndpointInstanceId = config.sourceEndpointInstanceId;
    this._sourceEndpointInstanceType = config.sourceEndpointInstanceType;
    this._sourceEndpointIp = config.sourceEndpointIp;
    this._sourceEndpointOracleSid = config.sourceEndpointOracleSid;
    this._sourceEndpointOwnerId = config.sourceEndpointOwnerId;
    this._sourceEndpointPassword = config.sourceEndpointPassword;
    this._sourceEndpointPort = config.sourceEndpointPort;
    this._sourceEndpointRegion = config.sourceEndpointRegion;
    this._sourceEndpointRole = config.sourceEndpointRole;
    this._sourceEndpointUserName = config.sourceEndpointUserName;
    this._status = config.status;
    this._structureInitialization = config.structureInitialization;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checkpoint - computed: true, optional: true, required: false
  private _checkpoint?: string; 
  public get checkpoint() {
    return this.getStringAttribute('checkpoint');
  }
  public set checkpoint(value: string) {
    this._checkpoint = value;
  }
  public resetCheckpoint() {
    this._checkpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointInput() {
    return this._checkpoint;
  }

  // data_initialization - computed: false, optional: false, required: true
  private _dataInitialization?: boolean | cdktf.IResolvable; 
  public get dataInitialization() {
    return this.getBooleanAttribute('data_initialization');
  }
  public set dataInitialization(value: boolean | cdktf.IResolvable) {
    this._dataInitialization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInitializationInput() {
    return this._dataInitialization;
  }

  // data_synchronization - computed: false, optional: false, required: true
  private _dataSynchronization?: boolean | cdktf.IResolvable; 
  public get dataSynchronization() {
    return this.getBooleanAttribute('data_synchronization');
  }
  public set dataSynchronization(value: boolean | cdktf.IResolvable) {
    this._dataSynchronization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSynchronizationInput() {
    return this._dataSynchronization;
  }

  // db_list - computed: false, optional: false, required: true
  private _dbList?: string; 
  public get dbList() {
    return this.getStringAttribute('db_list');
  }
  public set dbList(value: string) {
    this._dbList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbListInput() {
    return this._dbList;
  }

  // destination_endpoint_database_name - computed: false, optional: true, required: false
  private _destinationEndpointDatabaseName?: string; 
  public get destinationEndpointDatabaseName() {
    return this.getStringAttribute('destination_endpoint_database_name');
  }
  public set destinationEndpointDatabaseName(value: string) {
    this._destinationEndpointDatabaseName = value;
  }
  public resetDestinationEndpointDatabaseName() {
    this._destinationEndpointDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointDatabaseNameInput() {
    return this._destinationEndpointDatabaseName;
  }

  // destination_endpoint_engine_name - computed: false, optional: false, required: true
  private _destinationEndpointEngineName?: string; 
  public get destinationEndpointEngineName() {
    return this.getStringAttribute('destination_endpoint_engine_name');
  }
  public set destinationEndpointEngineName(value: string) {
    this._destinationEndpointEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointEngineNameInput() {
    return this._destinationEndpointEngineName;
  }

  // destination_endpoint_instance_id - computed: false, optional: true, required: false
  private _destinationEndpointInstanceId?: string; 
  public get destinationEndpointInstanceId() {
    return this.getStringAttribute('destination_endpoint_instance_id');
  }
  public set destinationEndpointInstanceId(value: string) {
    this._destinationEndpointInstanceId = value;
  }
  public resetDestinationEndpointInstanceId() {
    this._destinationEndpointInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointInstanceIdInput() {
    return this._destinationEndpointInstanceId;
  }

  // destination_endpoint_instance_type - computed: false, optional: false, required: true
  private _destinationEndpointInstanceType?: string; 
  public get destinationEndpointInstanceType() {
    return this.getStringAttribute('destination_endpoint_instance_type');
  }
  public set destinationEndpointInstanceType(value: string) {
    this._destinationEndpointInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointInstanceTypeInput() {
    return this._destinationEndpointInstanceType;
  }

  // destination_endpoint_ip - computed: false, optional: true, required: false
  private _destinationEndpointIp?: string; 
  public get destinationEndpointIp() {
    return this.getStringAttribute('destination_endpoint_ip');
  }
  public set destinationEndpointIp(value: string) {
    this._destinationEndpointIp = value;
  }
  public resetDestinationEndpointIp() {
    this._destinationEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointIpInput() {
    return this._destinationEndpointIp;
  }

  // destination_endpoint_oracle_sid - computed: false, optional: true, required: false
  private _destinationEndpointOracleSid?: string; 
  public get destinationEndpointOracleSid() {
    return this.getStringAttribute('destination_endpoint_oracle_sid');
  }
  public set destinationEndpointOracleSid(value: string) {
    this._destinationEndpointOracleSid = value;
  }
  public resetDestinationEndpointOracleSid() {
    this._destinationEndpointOracleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointOracleSidInput() {
    return this._destinationEndpointOracleSid;
  }

  // destination_endpoint_password - computed: false, optional: true, required: false
  private _destinationEndpointPassword?: string; 
  public get destinationEndpointPassword() {
    return this.getStringAttribute('destination_endpoint_password');
  }
  public set destinationEndpointPassword(value: string) {
    this._destinationEndpointPassword = value;
  }
  public resetDestinationEndpointPassword() {
    this._destinationEndpointPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointPasswordInput() {
    return this._destinationEndpointPassword;
  }

  // destination_endpoint_port - computed: false, optional: true, required: false
  private _destinationEndpointPort?: string; 
  public get destinationEndpointPort() {
    return this.getStringAttribute('destination_endpoint_port');
  }
  public set destinationEndpointPort(value: string) {
    this._destinationEndpointPort = value;
  }
  public resetDestinationEndpointPort() {
    this._destinationEndpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointPortInput() {
    return this._destinationEndpointPort;
  }

  // destination_endpoint_region - computed: false, optional: true, required: false
  private _destinationEndpointRegion?: string; 
  public get destinationEndpointRegion() {
    return this.getStringAttribute('destination_endpoint_region');
  }
  public set destinationEndpointRegion(value: string) {
    this._destinationEndpointRegion = value;
  }
  public resetDestinationEndpointRegion() {
    this._destinationEndpointRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointRegionInput() {
    return this._destinationEndpointRegion;
  }

  // destination_endpoint_user_name - computed: false, optional: true, required: false
  private _destinationEndpointUserName?: string; 
  public get destinationEndpointUserName() {
    return this.getStringAttribute('destination_endpoint_user_name');
  }
  public set destinationEndpointUserName(value: string) {
    this._destinationEndpointUserName = value;
  }
  public resetDestinationEndpointUserName() {
    this._destinationEndpointUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointUserNameInput() {
    return this._destinationEndpointUserName;
  }

  // dts_instance_id - computed: false, optional: false, required: true
  private _dtsInstanceId?: string; 
  public get dtsInstanceId() {
    return this.getStringAttribute('dts_instance_id');
  }
  public set dtsInstanceId(value: string) {
    this._dtsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dtsInstanceIdInput() {
    return this._dtsInstanceId;
  }

  // dts_job_name - computed: true, optional: true, required: false
  private _dtsJobName?: string; 
  public get dtsJobName() {
    return this.getStringAttribute('dts_job_name');
  }
  public set dtsJobName(value: string) {
    this._dtsJobName = value;
  }
  public resetDtsJobName() {
    this._dtsJobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtsJobNameInput() {
    return this._dtsJobName;
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

  // instance_class - computed: true, optional: true, required: false
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // source_endpoint_database_name - computed: false, optional: true, required: false
  private _sourceEndpointDatabaseName?: string; 
  public get sourceEndpointDatabaseName() {
    return this.getStringAttribute('source_endpoint_database_name');
  }
  public set sourceEndpointDatabaseName(value: string) {
    this._sourceEndpointDatabaseName = value;
  }
  public resetSourceEndpointDatabaseName() {
    this._sourceEndpointDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointDatabaseNameInput() {
    return this._sourceEndpointDatabaseName;
  }

  // source_endpoint_engine_name - computed: false, optional: false, required: true
  private _sourceEndpointEngineName?: string; 
  public get sourceEndpointEngineName() {
    return this.getStringAttribute('source_endpoint_engine_name');
  }
  public set sourceEndpointEngineName(value: string) {
    this._sourceEndpointEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointEngineNameInput() {
    return this._sourceEndpointEngineName;
  }

  // source_endpoint_instance_id - computed: false, optional: true, required: false
  private _sourceEndpointInstanceId?: string; 
  public get sourceEndpointInstanceId() {
    return this.getStringAttribute('source_endpoint_instance_id');
  }
  public set sourceEndpointInstanceId(value: string) {
    this._sourceEndpointInstanceId = value;
  }
  public resetSourceEndpointInstanceId() {
    this._sourceEndpointInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointInstanceIdInput() {
    return this._sourceEndpointInstanceId;
  }

  // source_endpoint_instance_type - computed: false, optional: false, required: true
  private _sourceEndpointInstanceType?: string; 
  public get sourceEndpointInstanceType() {
    return this.getStringAttribute('source_endpoint_instance_type');
  }
  public set sourceEndpointInstanceType(value: string) {
    this._sourceEndpointInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointInstanceTypeInput() {
    return this._sourceEndpointInstanceType;
  }

  // source_endpoint_ip - computed: false, optional: true, required: false
  private _sourceEndpointIp?: string; 
  public get sourceEndpointIp() {
    return this.getStringAttribute('source_endpoint_ip');
  }
  public set sourceEndpointIp(value: string) {
    this._sourceEndpointIp = value;
  }
  public resetSourceEndpointIp() {
    this._sourceEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointIpInput() {
    return this._sourceEndpointIp;
  }

  // source_endpoint_oracle_sid - computed: false, optional: true, required: false
  private _sourceEndpointOracleSid?: string; 
  public get sourceEndpointOracleSid() {
    return this.getStringAttribute('source_endpoint_oracle_sid');
  }
  public set sourceEndpointOracleSid(value: string) {
    this._sourceEndpointOracleSid = value;
  }
  public resetSourceEndpointOracleSid() {
    this._sourceEndpointOracleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointOracleSidInput() {
    return this._sourceEndpointOracleSid;
  }

  // source_endpoint_owner_id - computed: false, optional: true, required: false
  private _sourceEndpointOwnerId?: string; 
  public get sourceEndpointOwnerId() {
    return this.getStringAttribute('source_endpoint_owner_id');
  }
  public set sourceEndpointOwnerId(value: string) {
    this._sourceEndpointOwnerId = value;
  }
  public resetSourceEndpointOwnerId() {
    this._sourceEndpointOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointOwnerIdInput() {
    return this._sourceEndpointOwnerId;
  }

  // source_endpoint_password - computed: false, optional: true, required: false
  private _sourceEndpointPassword?: string; 
  public get sourceEndpointPassword() {
    return this.getStringAttribute('source_endpoint_password');
  }
  public set sourceEndpointPassword(value: string) {
    this._sourceEndpointPassword = value;
  }
  public resetSourceEndpointPassword() {
    this._sourceEndpointPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointPasswordInput() {
    return this._sourceEndpointPassword;
  }

  // source_endpoint_port - computed: false, optional: true, required: false
  private _sourceEndpointPort?: string; 
  public get sourceEndpointPort() {
    return this.getStringAttribute('source_endpoint_port');
  }
  public set sourceEndpointPort(value: string) {
    this._sourceEndpointPort = value;
  }
  public resetSourceEndpointPort() {
    this._sourceEndpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointPortInput() {
    return this._sourceEndpointPort;
  }

  // source_endpoint_region - computed: false, optional: true, required: false
  private _sourceEndpointRegion?: string; 
  public get sourceEndpointRegion() {
    return this.getStringAttribute('source_endpoint_region');
  }
  public set sourceEndpointRegion(value: string) {
    this._sourceEndpointRegion = value;
  }
  public resetSourceEndpointRegion() {
    this._sourceEndpointRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointRegionInput() {
    return this._sourceEndpointRegion;
  }

  // source_endpoint_role - computed: false, optional: true, required: false
  private _sourceEndpointRole?: string; 
  public get sourceEndpointRole() {
    return this.getStringAttribute('source_endpoint_role');
  }
  public set sourceEndpointRole(value: string) {
    this._sourceEndpointRole = value;
  }
  public resetSourceEndpointRole() {
    this._sourceEndpointRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointRoleInput() {
    return this._sourceEndpointRole;
  }

  // source_endpoint_user_name - computed: false, optional: true, required: false
  private _sourceEndpointUserName?: string; 
  public get sourceEndpointUserName() {
    return this.getStringAttribute('source_endpoint_user_name');
  }
  public set sourceEndpointUserName(value: string) {
    this._sourceEndpointUserName = value;
  }
  public resetSourceEndpointUserName() {
    this._sourceEndpointUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointUserNameInput() {
    return this._sourceEndpointUserName;
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

  // structure_initialization - computed: false, optional: false, required: true
  private _structureInitialization?: boolean | cdktf.IResolvable; 
  public get structureInitialization() {
    return this.getBooleanAttribute('structure_initialization');
  }
  public set structureInitialization(value: boolean | cdktf.IResolvable) {
    this._structureInitialization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get structureInitializationInput() {
    return this._structureInitialization;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DtsMigrationJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DtsMigrationJobTimeouts) {
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
      checkpoint: cdktf.stringToTerraform(this._checkpoint),
      data_initialization: cdktf.booleanToTerraform(this._dataInitialization),
      data_synchronization: cdktf.booleanToTerraform(this._dataSynchronization),
      db_list: cdktf.stringToTerraform(this._dbList),
      destination_endpoint_database_name: cdktf.stringToTerraform(this._destinationEndpointDatabaseName),
      destination_endpoint_engine_name: cdktf.stringToTerraform(this._destinationEndpointEngineName),
      destination_endpoint_instance_id: cdktf.stringToTerraform(this._destinationEndpointInstanceId),
      destination_endpoint_instance_type: cdktf.stringToTerraform(this._destinationEndpointInstanceType),
      destination_endpoint_ip: cdktf.stringToTerraform(this._destinationEndpointIp),
      destination_endpoint_oracle_sid: cdktf.stringToTerraform(this._destinationEndpointOracleSid),
      destination_endpoint_password: cdktf.stringToTerraform(this._destinationEndpointPassword),
      destination_endpoint_port: cdktf.stringToTerraform(this._destinationEndpointPort),
      destination_endpoint_region: cdktf.stringToTerraform(this._destinationEndpointRegion),
      destination_endpoint_user_name: cdktf.stringToTerraform(this._destinationEndpointUserName),
      dts_instance_id: cdktf.stringToTerraform(this._dtsInstanceId),
      dts_job_name: cdktf.stringToTerraform(this._dtsJobName),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      source_endpoint_database_name: cdktf.stringToTerraform(this._sourceEndpointDatabaseName),
      source_endpoint_engine_name: cdktf.stringToTerraform(this._sourceEndpointEngineName),
      source_endpoint_instance_id: cdktf.stringToTerraform(this._sourceEndpointInstanceId),
      source_endpoint_instance_type: cdktf.stringToTerraform(this._sourceEndpointInstanceType),
      source_endpoint_ip: cdktf.stringToTerraform(this._sourceEndpointIp),
      source_endpoint_oracle_sid: cdktf.stringToTerraform(this._sourceEndpointOracleSid),
      source_endpoint_owner_id: cdktf.stringToTerraform(this._sourceEndpointOwnerId),
      source_endpoint_password: cdktf.stringToTerraform(this._sourceEndpointPassword),
      source_endpoint_port: cdktf.stringToTerraform(this._sourceEndpointPort),
      source_endpoint_region: cdktf.stringToTerraform(this._sourceEndpointRegion),
      source_endpoint_role: cdktf.stringToTerraform(this._sourceEndpointRole),
      source_endpoint_user_name: cdktf.stringToTerraform(this._sourceEndpointUserName),
      status: cdktf.stringToTerraform(this._status),
      structure_initialization: cdktf.booleanToTerraform(this._structureInitialization),
      timeouts: dtsMigrationJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checkpoint: {
        value: cdktf.stringToHclTerraform(this._checkpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_initialization: {
        value: cdktf.booleanToHclTerraform(this._dataInitialization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_synchronization: {
        value: cdktf.booleanToHclTerraform(this._dataSynchronization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      db_list: {
        value: cdktf.stringToHclTerraform(this._dbList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_database_name: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_engine_name: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_instance_id: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_instance_type: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_oracle_sid: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointOracleSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_password: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_port: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_region: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_user_name: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dts_instance_id: {
        value: cdktf.stringToHclTerraform(this._dtsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dts_job_name: {
        value: cdktf.stringToHclTerraform(this._dtsJobName),
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
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_database_name: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_engine_name: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_instance_id: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_instance_type: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_oracle_sid: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointOracleSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_owner_id: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_password: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_port: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_region: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_role: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_user_name: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      structure_initialization: {
        value: cdktf.booleanToHclTerraform(this._structureInitialization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dtsMigrationJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DtsMigrationJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
