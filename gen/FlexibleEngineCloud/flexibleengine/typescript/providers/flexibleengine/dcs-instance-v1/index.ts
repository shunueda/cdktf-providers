// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcsInstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#access_user DcsInstanceV1#access_user}
  */
  readonly accessUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}
  */
  readonly availableZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}
  */
  readonly backupAt?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}
  */
  readonly beginAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#instance_type DcsInstanceV1#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}
  */
  readonly maintainBegin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}
  */
  readonly maintainEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#network_id DcsInstanceV1#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}
  */
  readonly periodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#port DcsInstanceV1#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}
  */
  readonly saveDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#timeouts DcsInstanceV1#timeouts}
  */
  readonly timeouts?: DcsInstanceV1Timeouts;
}
export interface DcsInstanceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#create DcsInstanceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#delete DcsInstanceV1#delete}
  */
  readonly delete?: string;
}

export function dcsInstanceV1TimeoutsToTerraform(struct?: DcsInstanceV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dcsInstanceV1TimeoutsToHclTerraform(struct?: DcsInstanceV1Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcsInstanceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DcsInstanceV1Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcsInstanceV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1 flexibleengine_dcs_instance_v1}
*/
export class DcsInstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_dcs_instance_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcsInstanceV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcsInstanceV1 to import
  * @param importFromId The id of the existing DcsInstanceV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcsInstanceV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_dcs_instance_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dcs_instance_v1 flexibleengine_dcs_instance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcsInstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: DcsInstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_dcs_instance_v1',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessUser = config.accessUser;
    this._availableZones = config.availableZones;
    this._backupAt = config.backupAt;
    this._backupType = config.backupType;
    this._beginAt = config.beginAt;
    this._capacity = config.capacity;
    this._description = config.description;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._maintainBegin = config.maintainBegin;
    this._maintainEnd = config.maintainEnd;
    this._name = config.name;
    this._networkId = config.networkId;
    this._password = config.password;
    this._periodType = config.periodType;
    this._port = config.port;
    this._productId = config.productId;
    this._saveDays = config.saveDays;
    this._securityGroupId = config.securityGroupId;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_user - computed: false, optional: true, required: false
  private _accessUser?: string; 
  public get accessUser() {
    return this.getStringAttribute('access_user');
  }
  public set accessUser(value: string) {
    this._accessUser = value;
  }
  public resetAccessUser() {
    this._accessUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessUserInput() {
    return this._accessUser;
  }

  // available_zones - computed: false, optional: false, required: true
  private _availableZones?: string[]; 
  public get availableZones() {
    return this.getListAttribute('available_zones');
  }
  public set availableZones(value: string[]) {
    this._availableZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZonesInput() {
    return this._availableZones;
  }

  // backup_at - computed: false, optional: true, required: false
  private _backupAt?: number[]; 
  public get backupAt() {
    return this.getNumberListAttribute('backup_at');
  }
  public set backupAt(value: number[]) {
    this._backupAt = value;
  }
  public resetBackupAt() {
    this._backupAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAtInput() {
    return this._backupAt;
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // begin_at - computed: false, optional: true, required: false
  private _beginAt?: string; 
  public get beginAt() {
    return this.getStringAttribute('begin_at');
  }
  public set beginAt(value: string) {
    this._beginAt = value;
  }
  public resetBeginAt() {
    this._beginAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginAtInput() {
    return this._beginAt;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internal_version - computed: true, optional: false, required: false
  public get internalVersion() {
    return this.getStringAttribute('internal_version');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // maintain_begin - computed: true, optional: true, required: false
  private _maintainBegin?: string; 
  public get maintainBegin() {
    return this.getStringAttribute('maintain_begin');
  }
  public set maintainBegin(value: string) {
    this._maintainBegin = value;
  }
  public resetMaintainBegin() {
    this._maintainBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainBeginInput() {
    return this._maintainBegin;
  }

  // maintain_end - computed: true, optional: true, required: false
  private _maintainEnd?: string; 
  public get maintainEnd() {
    return this.getStringAttribute('maintain_end');
  }
  public set maintainEnd(value: string) {
    this._maintainEnd = value;
  }
  public resetMaintainEnd() {
    this._maintainEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndInput() {
    return this._maintainEnd;
  }

  // max_memory - computed: true, optional: false, required: false
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // period_type - computed: false, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // product_id - computed: true, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // resource_spec_code - computed: true, optional: false, required: false
  public get resourceSpecCode() {
    return this.getStringAttribute('resource_spec_code');
  }

  // save_days - computed: false, optional: true, required: false
  private _saveDays?: number; 
  public get saveDays() {
    return this.getNumberAttribute('save_days');
  }
  public set saveDays(value: number) {
    this._saveDays = value;
  }
  public resetSaveDays() {
    this._saveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveDaysInput() {
    return this._saveDays;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // used_memory - computed: true, optional: false, required: false
  public get usedMemory() {
    return this.getNumberAttribute('used_memory');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DcsInstanceV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DcsInstanceV1Timeouts) {
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
      access_user: cdktf.stringToTerraform(this._accessUser),
      available_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availableZones),
      backup_at: cdktf.listMapper(cdktf.numberToTerraform, false)(this._backupAt),
      backup_type: cdktf.stringToTerraform(this._backupType),
      begin_at: cdktf.stringToTerraform(this._beginAt),
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      maintain_begin: cdktf.stringToTerraform(this._maintainBegin),
      maintain_end: cdktf.stringToTerraform(this._maintainEnd),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      password: cdktf.stringToTerraform(this._password),
      period_type: cdktf.stringToTerraform(this._periodType),
      port: cdktf.numberToTerraform(this._port),
      product_id: cdktf.stringToTerraform(this._productId),
      save_days: cdktf.numberToTerraform(this._saveDays),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: dcsInstanceV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_user: {
        value: cdktf.stringToHclTerraform(this._accessUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availableZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backup_at: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._backupAt),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      begin_at: {
        value: cdktf.stringToHclTerraform(this._beginAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_begin: {
        value: cdktf.stringToHclTerraform(this._maintainBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_end: {
        value: cdktf.stringToHclTerraform(this._maintainEnd),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period_type: {
        value: cdktf.stringToHclTerraform(this._periodType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_days: {
        value: cdktf.numberToHclTerraform(this._saveDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dcsInstanceV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DcsInstanceV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
