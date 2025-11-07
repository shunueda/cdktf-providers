// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsKafkaInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#access_user DmsKafkaInstance#access_user}
  */
  readonly accessUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#availability_zones DmsKafkaInstance#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#bandwidth DmsKafkaInstance#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#description DmsKafkaInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#enable_auto_topic DmsKafkaInstance#enable_auto_topic}
  */
  readonly enableAutoTopic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#engine_version DmsKafkaInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#id DmsKafkaInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#maintain_begin DmsKafkaInstance#maintain_begin}
  */
  readonly maintainBegin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#maintain_end DmsKafkaInstance#maintain_end}
  */
  readonly maintainEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#manager_password DmsKafkaInstance#manager_password}
  */
  readonly managerPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#manager_user DmsKafkaInstance#manager_user}
  */
  readonly managerUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#name DmsKafkaInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#network_id DmsKafkaInstance#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#password DmsKafkaInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#product_id DmsKafkaInstance#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#region DmsKafkaInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#security_group_id DmsKafkaInstance#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#storage_space DmsKafkaInstance#storage_space}
  */
  readonly storageSpace: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#storage_spec_code DmsKafkaInstance#storage_spec_code}
  */
  readonly storageSpecCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#tags DmsKafkaInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#vpc_id DmsKafkaInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#timeouts DmsKafkaInstance#timeouts}
  */
  readonly timeouts?: DmsKafkaInstanceTimeouts;
}
export interface DmsKafkaInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#create DmsKafkaInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#delete DmsKafkaInstance#delete}
  */
  readonly delete?: string;
}

export function dmsKafkaInstanceTimeoutsToTerraform(struct?: DmsKafkaInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dmsKafkaInstanceTimeoutsToHclTerraform(struct?: DmsKafkaInstanceTimeouts | cdktf.IResolvable): any {
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

export class DmsKafkaInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DmsKafkaInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DmsKafkaInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance flexibleengine_dms_kafka_instance}
*/
export class DmsKafkaInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_dms_kafka_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsKafkaInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsKafkaInstance to import
  * @param importFromId The id of the existing DmsKafkaInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsKafkaInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_dms_kafka_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/dms_kafka_instance flexibleengine_dms_kafka_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsKafkaInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DmsKafkaInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_dms_kafka_instance',
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
    this._availabilityZones = config.availabilityZones;
    this._bandwidth = config.bandwidth;
    this._description = config.description;
    this._enableAutoTopic = config.enableAutoTopic;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._maintainBegin = config.maintainBegin;
    this._maintainEnd = config.maintainEnd;
    this._managerPassword = config.managerPassword;
    this._managerUser = config.managerUser;
    this._name = config.name;
    this._networkId = config.networkId;
    this._password = config.password;
    this._productId = config.productId;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
    this._storageSpace = config.storageSpace;
    this._storageSpecCode = config.storageSpecCode;
    this._tags = config.tags;
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

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // connect_address - computed: true, optional: false, required: false
  public get connectAddress() {
    return this.getStringAttribute('connect_address');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
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

  // enable_auto_topic - computed: false, optional: true, required: false
  private _enableAutoTopic?: boolean | cdktf.IResolvable; 
  public get enableAutoTopic() {
    return this.getBooleanAttribute('enable_auto_topic');
  }
  public set enableAutoTopic(value: boolean | cdktf.IResolvable) {
    this._enableAutoTopic = value;
  }
  public resetEnableAutoTopic() {
    this._enableAutoTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoTopicInput() {
    return this._enableAutoTopic;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // engine_version - computed: false, optional: true, required: false
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

  // manager_password - computed: false, optional: true, required: false
  private _managerPassword?: string; 
  public get managerPassword() {
    return this.getStringAttribute('manager_password');
  }
  public set managerPassword(value: string) {
    this._managerPassword = value;
  }
  public resetManagerPassword() {
    this._managerPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerPasswordInput() {
    return this._managerPassword;
  }

  // manager_user - computed: false, optional: true, required: false
  private _managerUser?: string; 
  public get managerUser() {
    return this.getStringAttribute('manager_user');
  }
  public set managerUser(value: string) {
    this._managerUser = value;
  }
  public resetManagerUser() {
    this._managerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerUserInput() {
    return this._managerUser;
  }

  // manegement_connect_address - computed: true, optional: false, required: false
  public get manegementConnectAddress() {
    return this.getStringAttribute('manegement_connect_address');
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

  // node_num - computed: true, optional: false, required: false
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }

  // partition_num - computed: true, optional: false, required: false
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // product_spec_code - computed: true, optional: false, required: false
  public get productSpecCode() {
    return this.getStringAttribute('product_spec_code');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // ssl_enable - computed: true, optional: false, required: false
  public get sslEnable() {
    return this.getBooleanAttribute('ssl_enable');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_space - computed: false, optional: false, required: true
  private _storageSpace?: number; 
  public get storageSpace() {
    return this.getNumberAttribute('storage_space');
  }
  public set storageSpace(value: number) {
    this._storageSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSpaceInput() {
    return this._storageSpace;
  }

  // storage_spec_code - computed: false, optional: true, required: false
  private _storageSpecCode?: string; 
  public get storageSpecCode() {
    return this.getStringAttribute('storage_spec_code');
  }
  public set storageSpecCode(value: string) {
    this._storageSpecCode = value;
  }
  public resetStorageSpecCode() {
    this._storageSpecCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSpecCodeInput() {
    return this._storageSpecCode;
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // used_storage_space - computed: true, optional: false, required: false
  public get usedStorageSpace() {
    return this.getNumberAttribute('used_storage_space');
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
  private _timeouts = new DmsKafkaInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DmsKafkaInstanceTimeouts) {
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
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      description: cdktf.stringToTerraform(this._description),
      enable_auto_topic: cdktf.booleanToTerraform(this._enableAutoTopic),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      maintain_begin: cdktf.stringToTerraform(this._maintainBegin),
      maintain_end: cdktf.stringToTerraform(this._maintainEnd),
      manager_password: cdktf.stringToTerraform(this._managerPassword),
      manager_user: cdktf.stringToTerraform(this._managerUser),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      password: cdktf.stringToTerraform(this._password),
      product_id: cdktf.stringToTerraform(this._productId),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      storage_space: cdktf.numberToTerraform(this._storageSpace),
      storage_spec_code: cdktf.stringToTerraform(this._storageSpecCode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: dmsKafkaInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
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
      enable_auto_topic: {
        value: cdktf.booleanToHclTerraform(this._enableAutoTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      manager_password: {
        value: cdktf.stringToHclTerraform(this._managerPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_user: {
        value: cdktf.stringToHclTerraform(this._managerUser),
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
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_space: {
        value: cdktf.numberToHclTerraform(this._storageSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_spec_code: {
        value: cdktf.stringToHclTerraform(this._storageSpecCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dmsKafkaInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DmsKafkaInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
