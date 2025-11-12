// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrdsPolardbxInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#cn_class DrdsPolardbxInstance#cn_class}
  */
  readonly cnClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#cn_node_count DrdsPolardbxInstance#cn_node_count}
  */
  readonly cnNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#dn_class DrdsPolardbxInstance#dn_class}
  */
  readonly dnClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#dn_node_count DrdsPolardbxInstance#dn_node_count}
  */
  readonly dnNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#id DrdsPolardbxInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#primary_zone DrdsPolardbxInstance#primary_zone}
  */
  readonly primaryZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#resource_group_id DrdsPolardbxInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#secondary_zone DrdsPolardbxInstance#secondary_zone}
  */
  readonly secondaryZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#tertiary_zone DrdsPolardbxInstance#tertiary_zone}
  */
  readonly tertiaryZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#topology_type DrdsPolardbxInstance#topology_type}
  */
  readonly topologyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#vpc_id DrdsPolardbxInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#vswitch_id DrdsPolardbxInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#timeouts DrdsPolardbxInstance#timeouts}
  */
  readonly timeouts?: DrdsPolardbxInstanceTimeouts;
}
export interface DrdsPolardbxInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#create DrdsPolardbxInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#delete DrdsPolardbxInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#update DrdsPolardbxInstance#update}
  */
  readonly update?: string;
}

export function drdsPolardbxInstanceTimeoutsToTerraform(struct?: DrdsPolardbxInstanceTimeouts | cdktf.IResolvable): any {
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


export function drdsPolardbxInstanceTimeoutsToHclTerraform(struct?: DrdsPolardbxInstanceTimeouts | cdktf.IResolvable): any {
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

export class DrdsPolardbxInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DrdsPolardbxInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DrdsPolardbxInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance alicloud_drds_polardbx_instance}
*/
export class DrdsPolardbxInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_drds_polardbx_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrdsPolardbxInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrdsPolardbxInstance to import
  * @param importFromId The id of the existing DrdsPolardbxInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrdsPolardbxInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_drds_polardbx_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/drds_polardbx_instance alicloud_drds_polardbx_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrdsPolardbxInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DrdsPolardbxInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_drds_polardbx_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cnClass = config.cnClass;
    this._cnNodeCount = config.cnNodeCount;
    this._dnClass = config.dnClass;
    this._dnNodeCount = config.dnNodeCount;
    this._id = config.id;
    this._primaryZone = config.primaryZone;
    this._resourceGroupId = config.resourceGroupId;
    this._secondaryZone = config.secondaryZone;
    this._tertiaryZone = config.tertiaryZone;
    this._topologyType = config.topologyType;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cn_class - computed: false, optional: false, required: true
  private _cnClass?: string; 
  public get cnClass() {
    return this.getStringAttribute('cn_class');
  }
  public set cnClass(value: string) {
    this._cnClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnClassInput() {
    return this._cnClass;
  }

  // cn_node_count - computed: false, optional: false, required: true
  private _cnNodeCount?: number; 
  public get cnNodeCount() {
    return this.getNumberAttribute('cn_node_count');
  }
  public set cnNodeCount(value: number) {
    this._cnNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnNodeCountInput() {
    return this._cnNodeCount;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dn_class - computed: false, optional: false, required: true
  private _dnClass?: string; 
  public get dnClass() {
    return this.getStringAttribute('dn_class');
  }
  public set dnClass(value: string) {
    this._dnClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnClassInput() {
    return this._dnClass;
  }

  // dn_node_count - computed: false, optional: false, required: true
  private _dnNodeCount?: number; 
  public get dnNodeCount() {
    return this.getNumberAttribute('dn_node_count');
  }
  public set dnNodeCount(value: number) {
    this._dnNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnNodeCountInput() {
    return this._dnNodeCount;
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

  // primary_zone - computed: false, optional: false, required: true
  private _primaryZone?: string; 
  public get primaryZone() {
    return this.getStringAttribute('primary_zone');
  }
  public set primaryZone(value: string) {
    this._primaryZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryZoneInput() {
    return this._primaryZone;
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

  // secondary_zone - computed: false, optional: true, required: false
  private _secondaryZone?: string; 
  public get secondaryZone() {
    return this.getStringAttribute('secondary_zone');
  }
  public set secondaryZone(value: string) {
    this._secondaryZone = value;
  }
  public resetSecondaryZone() {
    this._secondaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneInput() {
    return this._secondaryZone;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tertiary_zone - computed: false, optional: true, required: false
  private _tertiaryZone?: string; 
  public get tertiaryZone() {
    return this.getStringAttribute('tertiary_zone');
  }
  public set tertiaryZone(value: string) {
    this._tertiaryZone = value;
  }
  public resetTertiaryZone() {
    this._tertiaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryZoneInput() {
    return this._tertiaryZone;
  }

  // topology_type - computed: false, optional: false, required: true
  private _topologyType?: string; 
  public get topologyType() {
    return this.getStringAttribute('topology_type');
  }
  public set topologyType(value: string) {
    this._topologyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyTypeInput() {
    return this._topologyType;
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

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DrdsPolardbxInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DrdsPolardbxInstanceTimeouts) {
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
      cn_class: cdktf.stringToTerraform(this._cnClass),
      cn_node_count: cdktf.numberToTerraform(this._cnNodeCount),
      dn_class: cdktf.stringToTerraform(this._dnClass),
      dn_node_count: cdktf.numberToTerraform(this._dnNodeCount),
      id: cdktf.stringToTerraform(this._id),
      primary_zone: cdktf.stringToTerraform(this._primaryZone),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      secondary_zone: cdktf.stringToTerraform(this._secondaryZone),
      tertiary_zone: cdktf.stringToTerraform(this._tertiaryZone),
      topology_type: cdktf.stringToTerraform(this._topologyType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      timeouts: drdsPolardbxInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cn_class: {
        value: cdktf.stringToHclTerraform(this._cnClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn_node_count: {
        value: cdktf.numberToHclTerraform(this._cnNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dn_class: {
        value: cdktf.stringToHclTerraform(this._dnClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn_node_count: {
        value: cdktf.numberToHclTerraform(this._dnNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_zone: {
        value: cdktf.stringToHclTerraform(this._primaryZone),
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
      secondary_zone: {
        value: cdktf.stringToHclTerraform(this._secondaryZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tertiary_zone: {
        value: cdktf.stringToHclTerraform(this._tertiaryZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_type: {
        value: cdktf.stringToHclTerraform(this._topologyType),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: drdsPolardbxInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DrdsPolardbxInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
