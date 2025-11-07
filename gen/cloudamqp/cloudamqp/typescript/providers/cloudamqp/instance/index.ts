// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Keep associated VPC when deleting instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#keep_associated_vpc Instance#keep_associated_vpc}
  */
  readonly keepAssociatedVpc?: boolean | cdktf.IResolvable;
  /**
  * Name of the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
  /**
  * Set to true to not create default alarms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#no_default_alarms Instance#no_default_alarms}
  */
  readonly noDefaultAlarms?: boolean | cdktf.IResolvable;
  /**
  * Number of nodes in cluster (plan must support it)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#nodes Instance#nodes}
  */
  readonly nodes?: number;
  /**
  * Name of the plan, see documentation for valid plans
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#plan Instance#plan}
  */
  readonly plan: string;
  /**
  * Preferred availability zone for the instance(s), one entry per node in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#preferred_az Instance#preferred_az}
  */
  readonly preferredAz?: string[];
  /**
  * Name of the region you want to create your instance in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#region Instance#region}
  */
  readonly region: string;
  /**
  * RabbitMQ version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#rmq_version Instance#rmq_version}
  */
  readonly rmqVersion?: string;
  /**
  * Tag the instances with optional tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#tags Instance#tags}
  */
  readonly tags?: string[];
  /**
  * The ID of the VPC to create your instance in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#vpc_id Instance#vpc_id}
  */
  readonly vpcId?: number;
  /**
  * Dedicated VPC subnet, shouldn't overlap with your current VPC's subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#vpc_subnet Instance#vpc_subnet}
  */
  readonly vpcSubnet?: string;
  /**
  * copy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#copy_settings Instance#copy_settings}
  */
  readonly copySettings?: InstanceCopySettings[] | cdktf.IResolvable;
}
export interface InstanceCopySettings {
  /**
  * Settings to be copied. [alarms, config, definitions, firewall, logs, metrics, plugins]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#settings Instance#settings}
  */
  readonly settings: string[];
  /**
  * Instance identifier of the CloudAMQP instance to copy settings from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#subscription_id Instance#subscription_id}
  */
  readonly subscriptionId: string;
}

export function instanceCopySettingsToTerraform(struct?: InstanceCopySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    settings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.settings),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function instanceCopySettingsToHclTerraform(struct?: InstanceCopySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    settings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.settings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceCopySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceCopySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceCopySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settings = undefined;
      this._subscriptionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settings = value.settings;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // settings - computed: false, optional: false, required: true
  private _settings?: string[]; 
  public get settings() {
    return this.getListAttribute('settings');
  }
  public set settings(value: string[]) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}

export class InstanceCopySettingsList extends cdktf.ComplexList {
  public internalValue? : InstanceCopySettings[] | cdktf.IResolvable

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
  public get(index: number): InstanceCopySettingsOutputReference {
    return new InstanceCopySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance cloudamqp_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/instance cloudamqp_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_instance',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._keepAssociatedVpc = config.keepAssociatedVpc;
    this._name = config.name;
    this._noDefaultAlarms = config.noDefaultAlarms;
    this._nodes = config.nodes;
    this._plan = config.plan;
    this._preferredAz = config.preferredAz;
    this._region = config.region;
    this._rmqVersion = config.rmqVersion;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vpcSubnet = config.vpcSubnet;
    this._copySettings.internalValue = config.copySettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apikey - computed: true, optional: false, required: false
  public get apikey() {
    return this.getStringAttribute('apikey');
  }

  // backend - computed: true, optional: false, required: false
  public get backend() {
    return this.getStringAttribute('backend');
  }

  // dedicated - computed: true, optional: false, required: false
  public get dedicated() {
    return this.getBooleanAttribute('dedicated');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // host_internal - computed: true, optional: false, required: false
  public get hostInternal() {
    return this.getStringAttribute('host_internal');
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

  // keep_associated_vpc - computed: false, optional: true, required: false
  private _keepAssociatedVpc?: boolean | cdktf.IResolvable; 
  public get keepAssociatedVpc() {
    return this.getBooleanAttribute('keep_associated_vpc');
  }
  public set keepAssociatedVpc(value: boolean | cdktf.IResolvable) {
    this._keepAssociatedVpc = value;
  }
  public resetKeepAssociatedVpc() {
    this._keepAssociatedVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAssociatedVpcInput() {
    return this._keepAssociatedVpc;
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

  // no_default_alarms - computed: true, optional: true, required: false
  private _noDefaultAlarms?: boolean | cdktf.IResolvable; 
  public get noDefaultAlarms() {
    return this.getBooleanAttribute('no_default_alarms');
  }
  public set noDefaultAlarms(value: boolean | cdktf.IResolvable) {
    this._noDefaultAlarms = value;
  }
  public resetNoDefaultAlarms() {
    this._noDefaultAlarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDefaultAlarmsInput() {
    return this._noDefaultAlarms;
  }

  // nodes - computed: true, optional: true, required: false
  private _nodes?: number; 
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }
  public set nodes(value: number) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // preferred_az - computed: false, optional: true, required: false
  private _preferredAz?: string[]; 
  public get preferredAz() {
    return this.getListAttribute('preferred_az');
  }
  public set preferredAz(value: string[]) {
    this._preferredAz = value;
  }
  public resetPreferredAz() {
    this._preferredAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAzInput() {
    return this._preferredAz;
  }

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getBooleanAttribute('ready');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rmq_version - computed: true, optional: true, required: false
  private _rmqVersion?: string; 
  public get rmqVersion() {
    return this.getStringAttribute('rmq_version');
  }
  public set rmqVersion(value: string) {
    this._rmqVersion = value;
  }
  public resetRmqVersion() {
    this._rmqVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmqVersionInput() {
    return this._rmqVersion;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vhost - computed: true, optional: false, required: false
  public get vhost() {
    return this.getStringAttribute('vhost');
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: number; 
  public get vpcId() {
    return this.getNumberAttribute('vpc_id');
  }
  public set vpcId(value: number) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_subnet - computed: true, optional: true, required: false
  private _vpcSubnet?: string; 
  public get vpcSubnet() {
    return this.getStringAttribute('vpc_subnet');
  }
  public set vpcSubnet(value: string) {
    this._vpcSubnet = value;
  }
  public resetVpcSubnet() {
    this._vpcSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetInput() {
    return this._vpcSubnet;
  }

  // copy_settings - computed: false, optional: true, required: false
  private _copySettings = new InstanceCopySettingsList(this, "copy_settings", true);
  public get copySettings() {
    return this._copySettings;
  }
  public putCopySettings(value: InstanceCopySettings[] | cdktf.IResolvable) {
    this._copySettings.internalValue = value;
  }
  public resetCopySettings() {
    this._copySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copySettingsInput() {
    return this._copySettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      keep_associated_vpc: cdktf.booleanToTerraform(this._keepAssociatedVpc),
      name: cdktf.stringToTerraform(this._name),
      no_default_alarms: cdktf.booleanToTerraform(this._noDefaultAlarms),
      nodes: cdktf.numberToTerraform(this._nodes),
      plan: cdktf.stringToTerraform(this._plan),
      preferred_az: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredAz),
      region: cdktf.stringToTerraform(this._region),
      rmq_version: cdktf.stringToTerraform(this._rmqVersion),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vpc_id: cdktf.numberToTerraform(this._vpcId),
      vpc_subnet: cdktf.stringToTerraform(this._vpcSubnet),
      copy_settings: cdktf.listMapper(instanceCopySettingsToTerraform, true)(this._copySettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_associated_vpc: {
        value: cdktf.booleanToHclTerraform(this._keepAssociatedVpc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_default_alarms: {
        value: cdktf.booleanToHclTerraform(this._noDefaultAlarms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nodes: {
        value: cdktf.numberToHclTerraform(this._nodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_az: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredAz),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rmq_version: {
        value: cdktf.stringToHclTerraform(this._rmqVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.numberToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_subnet: {
        value: cdktf.stringToHclTerraform(this._vpcSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_settings: {
        value: cdktf.listMapperHcl(instanceCopySettingsToHclTerraform, true)(this._copySettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstanceCopySettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
