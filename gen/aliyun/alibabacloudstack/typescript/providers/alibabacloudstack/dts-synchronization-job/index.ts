// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsSynchronizationJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#checkpoint DtsSynchronizationJob#checkpoint}
  */
  readonly checkpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#data_initialization DtsSynchronizationJob#data_initialization}
  */
  readonly dataInitialization: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#data_synchronization DtsSynchronizationJob#data_synchronization}
  */
  readonly dataSynchronization: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#db_list DtsSynchronizationJob#db_list}
  */
  readonly dbList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#delay_notice DtsSynchronizationJob#delay_notice}
  */
  readonly delayNotice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#delay_phone DtsSynchronizationJob#delay_phone}
  */
  readonly delayPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#delay_rule_time DtsSynchronizationJob#delay_rule_time}
  */
  readonly delayRuleTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_database_name DtsSynchronizationJob#destination_endpoint_database_name}
  */
  readonly destinationEndpointDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_engine_name DtsSynchronizationJob#destination_endpoint_engine_name}
  */
  readonly destinationEndpointEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_instance_id DtsSynchronizationJob#destination_endpoint_instance_id}
  */
  readonly destinationEndpointInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_instance_type DtsSynchronizationJob#destination_endpoint_instance_type}
  */
  readonly destinationEndpointInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_ip DtsSynchronizationJob#destination_endpoint_ip}
  */
  readonly destinationEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_oracle_sid DtsSynchronizationJob#destination_endpoint_oracle_sid}
  */
  readonly destinationEndpointOracleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_password DtsSynchronizationJob#destination_endpoint_password}
  */
  readonly destinationEndpointPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_port DtsSynchronizationJob#destination_endpoint_port}
  */
  readonly destinationEndpointPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_region DtsSynchronizationJob#destination_endpoint_region}
  */
  readonly destinationEndpointRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#destination_endpoint_user_name DtsSynchronizationJob#destination_endpoint_user_name}
  */
  readonly destinationEndpointUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#dts_instance_id DtsSynchronizationJob#dts_instance_id}
  */
  readonly dtsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#dts_job_id DtsSynchronizationJob#dts_job_id}
  */
  readonly dtsJobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#dts_job_name DtsSynchronizationJob#dts_job_name}
  */
  readonly dtsJobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#error_notice DtsSynchronizationJob#error_notice}
  */
  readonly errorNotice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#error_phone DtsSynchronizationJob#error_phone}
  */
  readonly errorPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#id DtsSynchronizationJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#instance_class DtsSynchronizationJob#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#reserve DtsSynchronizationJob#reserve}
  */
  readonly reserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_database_name DtsSynchronizationJob#source_endpoint_database_name}
  */
  readonly sourceEndpointDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_engine_name DtsSynchronizationJob#source_endpoint_engine_name}
  */
  readonly sourceEndpointEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_instance_id DtsSynchronizationJob#source_endpoint_instance_id}
  */
  readonly sourceEndpointInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_instance_type DtsSynchronizationJob#source_endpoint_instance_type}
  */
  readonly sourceEndpointInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_ip DtsSynchronizationJob#source_endpoint_ip}
  */
  readonly sourceEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_oracle_sid DtsSynchronizationJob#source_endpoint_oracle_sid}
  */
  readonly sourceEndpointOracleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_owner_id DtsSynchronizationJob#source_endpoint_owner_id}
  */
  readonly sourceEndpointOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_password DtsSynchronizationJob#source_endpoint_password}
  */
  readonly sourceEndpointPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_port DtsSynchronizationJob#source_endpoint_port}
  */
  readonly sourceEndpointPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_region DtsSynchronizationJob#source_endpoint_region}
  */
  readonly sourceEndpointRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_role DtsSynchronizationJob#source_endpoint_role}
  */
  readonly sourceEndpointRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#source_endpoint_user_name DtsSynchronizationJob#source_endpoint_user_name}
  */
  readonly sourceEndpointUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#status DtsSynchronizationJob#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#structure_initialization DtsSynchronizationJob#structure_initialization}
  */
  readonly structureInitialization: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#synchronization_direction DtsSynchronizationJob#synchronization_direction}
  */
  readonly synchronizationDirection?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#timeouts DtsSynchronizationJob#timeouts}
  */
  readonly timeouts?: DtsSynchronizationJobTimeouts;
}
export interface DtsSynchronizationJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#update DtsSynchronizationJob#update}
  */
  readonly update?: string;
}

export function dtsSynchronizationJobTimeoutsToTerraform(struct?: DtsSynchronizationJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dtsSynchronizationJobTimeoutsToHclTerraform(struct?: DtsSynchronizationJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DtsSynchronizationJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DtsSynchronizationJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSynchronizationJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._update = value.update;
    }
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job alibabacloudstack_dts_synchronization_job}
*/
export class DtsSynchronizationJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dts_synchronization_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsSynchronizationJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsSynchronizationJob to import
  * @param importFromId The id of the existing DtsSynchronizationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsSynchronizationJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dts_synchronization_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dts_synchronization_job alibabacloudstack_dts_synchronization_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsSynchronizationJobConfig
  */
  public constructor(scope: Construct, id: string, config: DtsSynchronizationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dts_synchronization_job',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._delayNotice = config.delayNotice;
    this._delayPhone = config.delayPhone;
    this._delayRuleTime = config.delayRuleTime;
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
    this._dtsJobId = config.dtsJobId;
    this._dtsJobName = config.dtsJobName;
    this._errorNotice = config.errorNotice;
    this._errorPhone = config.errorPhone;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._reserve = config.reserve;
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
    this._synchronizationDirection = config.synchronizationDirection;
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

  // delay_notice - computed: false, optional: true, required: false
  private _delayNotice?: boolean | cdktf.IResolvable; 
  public get delayNotice() {
    return this.getBooleanAttribute('delay_notice');
  }
  public set delayNotice(value: boolean | cdktf.IResolvable) {
    this._delayNotice = value;
  }
  public resetDelayNotice() {
    this._delayNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayNoticeInput() {
    return this._delayNotice;
  }

  // delay_phone - computed: false, optional: true, required: false
  private _delayPhone?: string; 
  public get delayPhone() {
    return this.getStringAttribute('delay_phone');
  }
  public set delayPhone(value: string) {
    this._delayPhone = value;
  }
  public resetDelayPhone() {
    this._delayPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayPhoneInput() {
    return this._delayPhone;
  }

  // delay_rule_time - computed: false, optional: true, required: false
  private _delayRuleTime?: string; 
  public get delayRuleTime() {
    return this.getStringAttribute('delay_rule_time');
  }
  public set delayRuleTime(value: string) {
    this._delayRuleTime = value;
  }
  public resetDelayRuleTime() {
    this._delayRuleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayRuleTimeInput() {
    return this._delayRuleTime;
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

  // dts_job_id - computed: false, optional: true, required: false
  private _dtsJobId?: string; 
  public get dtsJobId() {
    return this.getStringAttribute('dts_job_id');
  }
  public set dtsJobId(value: string) {
    this._dtsJobId = value;
  }
  public resetDtsJobId() {
    this._dtsJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtsJobIdInput() {
    return this._dtsJobId;
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

  // error_notice - computed: false, optional: true, required: false
  private _errorNotice?: boolean | cdktf.IResolvable; 
  public get errorNotice() {
    return this.getBooleanAttribute('error_notice');
  }
  public set errorNotice(value: boolean | cdktf.IResolvable) {
    this._errorNotice = value;
  }
  public resetErrorNotice() {
    this._errorNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoticeInput() {
    return this._errorNotice;
  }

  // error_phone - computed: false, optional: true, required: false
  private _errorPhone?: string; 
  public get errorPhone() {
    return this.getStringAttribute('error_phone');
  }
  public set errorPhone(value: string) {
    this._errorPhone = value;
  }
  public resetErrorPhone() {
    this._errorPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPhoneInput() {
    return this._errorPhone;
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

  // reserve - computed: false, optional: true, required: false
  private _reserve?: string; 
  public get reserve() {
    return this.getStringAttribute('reserve');
  }
  public set reserve(value: string) {
    this._reserve = value;
  }
  public resetReserve() {
    this._reserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveInput() {
    return this._reserve;
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

  // synchronization_direction - computed: true, optional: true, required: false
  private _synchronizationDirection?: string; 
  public get synchronizationDirection() {
    return this.getStringAttribute('synchronization_direction');
  }
  public set synchronizationDirection(value: string) {
    this._synchronizationDirection = value;
  }
  public resetSynchronizationDirection() {
    this._synchronizationDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationDirectionInput() {
    return this._synchronizationDirection;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DtsSynchronizationJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DtsSynchronizationJobTimeouts) {
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
      delay_notice: cdktf.booleanToTerraform(this._delayNotice),
      delay_phone: cdktf.stringToTerraform(this._delayPhone),
      delay_rule_time: cdktf.stringToTerraform(this._delayRuleTime),
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
      dts_job_id: cdktf.stringToTerraform(this._dtsJobId),
      dts_job_name: cdktf.stringToTerraform(this._dtsJobName),
      error_notice: cdktf.booleanToTerraform(this._errorNotice),
      error_phone: cdktf.stringToTerraform(this._errorPhone),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      reserve: cdktf.stringToTerraform(this._reserve),
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
      synchronization_direction: cdktf.stringToTerraform(this._synchronizationDirection),
      timeouts: dtsSynchronizationJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      delay_notice: {
        value: cdktf.booleanToHclTerraform(this._delayNotice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay_phone: {
        value: cdktf.stringToHclTerraform(this._delayPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_rule_time: {
        value: cdktf.stringToHclTerraform(this._delayRuleTime),
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
      dts_job_id: {
        value: cdktf.stringToHclTerraform(this._dtsJobId),
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
      error_notice: {
        value: cdktf.booleanToHclTerraform(this._errorNotice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_phone: {
        value: cdktf.stringToHclTerraform(this._errorPhone),
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
      reserve: {
        value: cdktf.stringToHclTerraform(this._reserve),
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
      synchronization_direction: {
        value: cdktf.stringToHclTerraform(this._synchronizationDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dtsSynchronizationJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DtsSynchronizationJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
