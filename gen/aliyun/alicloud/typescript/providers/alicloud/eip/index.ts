// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#activity_id Eip#activity_id}
  */
  readonly activityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#address_name Eip#address_name}
  */
  readonly addressName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#allocation_id Eip#allocation_id}
  */
  readonly allocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#auto_pay Eip#auto_pay}
  */
  readonly autoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#bandwidth Eip#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#deletion_protection Eip#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#description Eip#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#high_definition_monitor_log_status Eip#high_definition_monitor_log_status}
  */
  readonly highDefinitionMonitorLogStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#id Eip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#instance_charge_type Eip#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#internet_charge_type Eip#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#ip_address Eip#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#isp Eip#isp}
  */
  readonly isp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#log_project Eip#log_project}
  */
  readonly logProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#log_store Eip#log_store}
  */
  readonly logStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#mode Eip#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#name Eip#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#netmode Eip#netmode}
  */
  readonly netmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#payment_type Eip#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#period Eip#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#pricing_cycle Eip#pricing_cycle}
  */
  readonly pricingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#public_ip_address_pool_id Eip#public_ip_address_pool_id}
  */
  readonly publicIpAddressPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#resource_group_id Eip#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#security_protection_types Eip#security_protection_types}
  */
  readonly securityProtectionTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#tags Eip#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#zone Eip#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#timeouts Eip#timeouts}
  */
  readonly timeouts?: EipTimeouts;
}
export interface EipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#create Eip#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#delete Eip#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#update Eip#update}
  */
  readonly update?: string;
}

export function eipTimeoutsToTerraform(struct?: EipTimeouts | cdktf.IResolvable): any {
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


export function eipTimeoutsToHclTerraform(struct?: EipTimeouts | cdktf.IResolvable): any {
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

export class EipTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EipTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EipTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip alicloud_eip}
*/
export class Eip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Eip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Eip to import
  * @param importFromId The id of the existing Eip that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Eip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip alicloud_eip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eip',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activityId = config.activityId;
    this._addressName = config.addressName;
    this._allocationId = config.allocationId;
    this._autoPay = config.autoPay;
    this._bandwidth = config.bandwidth;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._highDefinitionMonitorLogStatus = config.highDefinitionMonitorLogStatus;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._internetChargeType = config.internetChargeType;
    this._ipAddress = config.ipAddress;
    this._isp = config.isp;
    this._logProject = config.logProject;
    this._logStore = config.logStore;
    this._mode = config.mode;
    this._name = config.name;
    this._netmode = config.netmode;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._pricingCycle = config.pricingCycle;
    this._publicIpAddressPoolId = config.publicIpAddressPoolId;
    this._resourceGroupId = config.resourceGroupId;
    this._securityProtectionTypes = config.securityProtectionTypes;
    this._tags = config.tags;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activity_id - computed: false, optional: true, required: false
  private _activityId?: string; 
  public get activityId() {
    return this.getStringAttribute('activity_id');
  }
  public set activityId(value: string) {
    this._activityId = value;
  }
  public resetActivityId() {
    this._activityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityIdInput() {
    return this._activityId;
  }

  // address_name - computed: true, optional: true, required: false
  private _addressName?: string; 
  public get addressName() {
    return this.getStringAttribute('address_name');
  }
  public set addressName(value: string) {
    this._addressName = value;
  }
  public resetAddressName() {
    this._addressName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressNameInput() {
    return this._addressName;
  }

  // allocation_id - computed: true, optional: true, required: false
  private _allocationId?: string; 
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }
  public set allocationId(value: string) {
    this._allocationId = value;
  }
  public resetAllocationId() {
    this._allocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationIdInput() {
    return this._allocationId;
  }

  // auto_pay - computed: false, optional: true, required: false
  private _autoPay?: boolean | cdktf.IResolvable; 
  public get autoPay() {
    return this.getBooleanAttribute('auto_pay');
  }
  public set autoPay(value: boolean | cdktf.IResolvable) {
    this._autoPay = value;
  }
  public resetAutoPay() {
    this._autoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayInput() {
    return this._autoPay;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // high_definition_monitor_log_status - computed: true, optional: true, required: false
  private _highDefinitionMonitorLogStatus?: string; 
  public get highDefinitionMonitorLogStatus() {
    return this.getStringAttribute('high_definition_monitor_log_status');
  }
  public set highDefinitionMonitorLogStatus(value: string) {
    this._highDefinitionMonitorLogStatus = value;
  }
  public resetHighDefinitionMonitorLogStatus() {
    this._highDefinitionMonitorLogStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highDefinitionMonitorLogStatusInput() {
    return this._highDefinitionMonitorLogStatus;
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

  // instance_charge_type - computed: true, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // internet_charge_type - computed: true, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // isp - computed: true, optional: true, required: false
  private _isp?: string; 
  public get isp() {
    return this.getStringAttribute('isp');
  }
  public set isp(value: string) {
    this._isp = value;
  }
  public resetIsp() {
    this._isp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ispInput() {
    return this._isp;
  }

  // log_project - computed: false, optional: true, required: false
  private _logProject?: string; 
  public get logProject() {
    return this.getStringAttribute('log_project');
  }
  public set logProject(value: string) {
    this._logProject = value;
  }
  public resetLogProject() {
    this._logProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProjectInput() {
    return this._logProject;
  }

  // log_store - computed: false, optional: true, required: false
  private _logStore?: string; 
  public get logStore() {
    return this.getStringAttribute('log_store');
  }
  public set logStore(value: string) {
    this._logStore = value;
  }
  public resetLogStore() {
    this._logStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStoreInput() {
    return this._logStore;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netmode - computed: true, optional: true, required: false
  private _netmode?: string; 
  public get netmode() {
    return this.getStringAttribute('netmode');
  }
  public set netmode(value: string) {
    this._netmode = value;
  }
  public resetNetmode() {
    this._netmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmodeInput() {
    return this._netmode;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // pricing_cycle - computed: false, optional: true, required: false
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  public resetPricingCycle() {
    this._pricingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }

  // public_ip_address_pool_id - computed: false, optional: true, required: false
  private _publicIpAddressPoolId?: string; 
  public get publicIpAddressPoolId() {
    return this.getStringAttribute('public_ip_address_pool_id');
  }
  public set publicIpAddressPoolId(value: string) {
    this._publicIpAddressPoolId = value;
  }
  public resetPublicIpAddressPoolId() {
    this._publicIpAddressPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressPoolIdInput() {
    return this._publicIpAddressPoolId;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // security_protection_types - computed: false, optional: true, required: false
  private _securityProtectionTypes?: string[]; 
  public get securityProtectionTypes() {
    return this.getListAttribute('security_protection_types');
  }
  public set securityProtectionTypes(value: string[]) {
    this._securityProtectionTypes = value;
  }
  public resetSecurityProtectionTypes() {
    this._securityProtectionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtectionTypesInput() {
    return this._securityProtectionTypes;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EipTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EipTimeouts) {
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
      activity_id: cdktf.stringToTerraform(this._activityId),
      address_name: cdktf.stringToTerraform(this._addressName),
      allocation_id: cdktf.stringToTerraform(this._allocationId),
      auto_pay: cdktf.booleanToTerraform(this._autoPay),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      high_definition_monitor_log_status: cdktf.stringToTerraform(this._highDefinitionMonitorLogStatus),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      isp: cdktf.stringToTerraform(this._isp),
      log_project: cdktf.stringToTerraform(this._logProject),
      log_store: cdktf.stringToTerraform(this._logStore),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      netmode: cdktf.stringToTerraform(this._netmode),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      public_ip_address_pool_id: cdktf.stringToTerraform(this._publicIpAddressPoolId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_protection_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityProtectionTypes),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: eipTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activity_id: {
        value: cdktf.stringToHclTerraform(this._activityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_name: {
        value: cdktf.stringToHclTerraform(this._addressName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allocation_id: {
        value: cdktf.stringToHclTerraform(this._allocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_pay: {
        value: cdktf.booleanToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_definition_monitor_log_status: {
        value: cdktf.stringToHclTerraform(this._highDefinitionMonitorLogStatus),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isp: {
        value: cdktf.stringToHclTerraform(this._isp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_project: {
        value: cdktf.stringToHclTerraform(this._logProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_store: {
        value: cdktf.stringToHclTerraform(this._logStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      netmode: {
        value: cdktf.stringToHclTerraform(this._netmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_address_pool_id: {
        value: cdktf.stringToHclTerraform(this._publicIpAddressPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_protection_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityProtectionTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: eipTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EipTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
