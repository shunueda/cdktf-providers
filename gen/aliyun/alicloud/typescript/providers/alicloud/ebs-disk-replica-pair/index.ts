// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbsDiskReplicaPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#bandwidth EbsDiskReplicaPair#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#description EbsDiskReplicaPair#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#destination_disk_id EbsDiskReplicaPair#destination_disk_id}
  */
  readonly destinationDiskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#destination_region_id EbsDiskReplicaPair#destination_region_id}
  */
  readonly destinationRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#destination_zone_id EbsDiskReplicaPair#destination_zone_id}
  */
  readonly destinationZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#disk_id EbsDiskReplicaPair#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#disk_replica_pair_name EbsDiskReplicaPair#disk_replica_pair_name}
  */
  readonly diskReplicaPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#id EbsDiskReplicaPair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#one_shot EbsDiskReplicaPair#one_shot}
  */
  readonly oneShot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#pair_name EbsDiskReplicaPair#pair_name}
  */
  readonly pairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#payment_type EbsDiskReplicaPair#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#period EbsDiskReplicaPair#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#period_unit EbsDiskReplicaPair#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#resource_group_id EbsDiskReplicaPair#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#reverse_replicate EbsDiskReplicaPair#reverse_replicate}
  */
  readonly reverseReplicate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#rpo EbsDiskReplicaPair#rpo}
  */
  readonly rpo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#source_zone_id EbsDiskReplicaPair#source_zone_id}
  */
  readonly sourceZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#tags EbsDiskReplicaPair#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#timeouts EbsDiskReplicaPair#timeouts}
  */
  readonly timeouts?: EbsDiskReplicaPairTimeouts;
}
export interface EbsDiskReplicaPairTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#create EbsDiskReplicaPair#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#delete EbsDiskReplicaPair#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#update EbsDiskReplicaPair#update}
  */
  readonly update?: string;
}

export function ebsDiskReplicaPairTimeoutsToTerraform(struct?: EbsDiskReplicaPairTimeouts | cdktf.IResolvable): any {
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


export function ebsDiskReplicaPairTimeoutsToHclTerraform(struct?: EbsDiskReplicaPairTimeouts | cdktf.IResolvable): any {
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

export class EbsDiskReplicaPairTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EbsDiskReplicaPairTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EbsDiskReplicaPairTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair alicloud_ebs_disk_replica_pair}
*/
export class EbsDiskReplicaPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ebs_disk_replica_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbsDiskReplicaPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbsDiskReplicaPair to import
  * @param importFromId The id of the existing EbsDiskReplicaPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbsDiskReplicaPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ebs_disk_replica_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ebs_disk_replica_pair alicloud_ebs_disk_replica_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsDiskReplicaPairConfig
  */
  public constructor(scope: Construct, id: string, config: EbsDiskReplicaPairConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ebs_disk_replica_pair',
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
    this._bandwidth = config.bandwidth;
    this._description = config.description;
    this._destinationDiskId = config.destinationDiskId;
    this._destinationRegionId = config.destinationRegionId;
    this._destinationZoneId = config.destinationZoneId;
    this._diskId = config.diskId;
    this._diskReplicaPairName = config.diskReplicaPairName;
    this._id = config.id;
    this._oneShot = config.oneShot;
    this._pairName = config.pairName;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._resourceGroupId = config.resourceGroupId;
    this._reverseReplicate = config.reverseReplicate;
    this._rpo = config.rpo;
    this._sourceZoneId = config.sourceZoneId;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
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
    return this.getNumberAttribute('create_time');
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

  // destination_disk_id - computed: false, optional: false, required: true
  private _destinationDiskId?: string; 
  public get destinationDiskId() {
    return this.getStringAttribute('destination_disk_id');
  }
  public set destinationDiskId(value: string) {
    this._destinationDiskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDiskIdInput() {
    return this._destinationDiskId;
  }

  // destination_region_id - computed: false, optional: false, required: true
  private _destinationRegionId?: string; 
  public get destinationRegionId() {
    return this.getStringAttribute('destination_region_id');
  }
  public set destinationRegionId(value: string) {
    this._destinationRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionIdInput() {
    return this._destinationRegionId;
  }

  // destination_zone_id - computed: false, optional: false, required: true
  private _destinationZoneId?: string; 
  public get destinationZoneId() {
    return this.getStringAttribute('destination_zone_id');
  }
  public set destinationZoneId(value: string) {
    this._destinationZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationZoneIdInput() {
    return this._destinationZoneId;
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_replica_pair_name - computed: true, optional: true, required: false
  private _diskReplicaPairName?: string; 
  public get diskReplicaPairName() {
    return this.getStringAttribute('disk_replica_pair_name');
  }
  public set diskReplicaPairName(value: string) {
    this._diskReplicaPairName = value;
  }
  public resetDiskReplicaPairName() {
    this._diskReplicaPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskReplicaPairNameInput() {
    return this._diskReplicaPairName;
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

  // one_shot - computed: false, optional: true, required: false
  private _oneShot?: boolean | cdktf.IResolvable; 
  public get oneShot() {
    return this.getBooleanAttribute('one_shot');
  }
  public set oneShot(value: boolean | cdktf.IResolvable) {
    this._oneShot = value;
  }
  public resetOneShot() {
    this._oneShot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneShotInput() {
    return this._oneShot;
  }

  // pair_name - computed: true, optional: true, required: false
  private _pairName?: string; 
  public get pairName() {
    return this.getStringAttribute('pair_name');
  }
  public set pairName(value: string) {
    this._pairName = value;
  }
  public resetPairName() {
    this._pairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairNameInput() {
    return this._pairName;
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

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
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

  // reverse_replicate - computed: false, optional: true, required: false
  private _reverseReplicate?: boolean | cdktf.IResolvable; 
  public get reverseReplicate() {
    return this.getBooleanAttribute('reverse_replicate');
  }
  public set reverseReplicate(value: boolean | cdktf.IResolvable) {
    this._reverseReplicate = value;
  }
  public resetReverseReplicate() {
    this._reverseReplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseReplicateInput() {
    return this._reverseReplicate;
  }

  // rpo - computed: true, optional: true, required: false
  private _rpo?: number; 
  public get rpo() {
    return this.getNumberAttribute('rpo');
  }
  public set rpo(value: number) {
    this._rpo = value;
  }
  public resetRpo() {
    this._rpo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // source_zone_id - computed: false, optional: false, required: true
  private _sourceZoneId?: string; 
  public get sourceZoneId() {
    return this.getStringAttribute('source_zone_id');
  }
  public set sourceZoneId(value: string) {
    this._sourceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceZoneIdInput() {
    return this._sourceZoneId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EbsDiskReplicaPairTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EbsDiskReplicaPairTimeouts) {
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
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      description: cdktf.stringToTerraform(this._description),
      destination_disk_id: cdktf.stringToTerraform(this._destinationDiskId),
      destination_region_id: cdktf.stringToTerraform(this._destinationRegionId),
      destination_zone_id: cdktf.stringToTerraform(this._destinationZoneId),
      disk_id: cdktf.stringToTerraform(this._diskId),
      disk_replica_pair_name: cdktf.stringToTerraform(this._diskReplicaPairName),
      id: cdktf.stringToTerraform(this._id),
      one_shot: cdktf.booleanToTerraform(this._oneShot),
      pair_name: cdktf.stringToTerraform(this._pairName),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      reverse_replicate: cdktf.booleanToTerraform(this._reverseReplicate),
      rpo: cdktf.numberToTerraform(this._rpo),
      source_zone_id: cdktf.stringToTerraform(this._sourceZoneId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: ebsDiskReplicaPairTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
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
      destination_disk_id: {
        value: cdktf.stringToHclTerraform(this._destinationDiskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_region_id: {
        value: cdktf.stringToHclTerraform(this._destinationRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_zone_id: {
        value: cdktf.stringToHclTerraform(this._destinationZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_id: {
        value: cdktf.stringToHclTerraform(this._diskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_replica_pair_name: {
        value: cdktf.stringToHclTerraform(this._diskReplicaPairName),
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
      one_shot: {
        value: cdktf.booleanToHclTerraform(this._oneShot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pair_name: {
        value: cdktf.stringToHclTerraform(this._pairName),
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
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
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
      reverse_replicate: {
        value: cdktf.booleanToHclTerraform(this._reverseReplicate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rpo: {
        value: cdktf.numberToHclTerraform(this._rpo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_zone_id: {
        value: cdktf.stringToHclTerraform(this._sourceZoneId),
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
      timeouts: {
        value: ebsDiskReplicaPairTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EbsDiskReplicaPairTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
