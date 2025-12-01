// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressConnectVirtualPhysicalConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#description ExpressConnectVirtualPhysicalConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#dry_run ExpressConnectVirtualPhysicalConnection#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#expect_spec ExpressConnectVirtualPhysicalConnection#expect_spec}
  */
  readonly expectSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#id ExpressConnectVirtualPhysicalConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#order_mode ExpressConnectVirtualPhysicalConnection#order_mode}
  */
  readonly orderMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#parent_physical_connection_id ExpressConnectVirtualPhysicalConnection#parent_physical_connection_id}
  */
  readonly parentPhysicalConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#resource_group_id ExpressConnectVirtualPhysicalConnection#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#spec ExpressConnectVirtualPhysicalConnection#spec}
  */
  readonly spec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#virtual_physical_connection_name ExpressConnectVirtualPhysicalConnection#virtual_physical_connection_name}
  */
  readonly virtualPhysicalConnectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#vlan_id ExpressConnectVirtualPhysicalConnection#vlan_id}
  */
  readonly vlanId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#vpconn_ali_uid ExpressConnectVirtualPhysicalConnection#vpconn_ali_uid}
  */
  readonly vpconnAliUid: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#timeouts ExpressConnectVirtualPhysicalConnection#timeouts}
  */
  readonly timeouts?: ExpressConnectVirtualPhysicalConnectionTimeouts;
}
export interface ExpressConnectVirtualPhysicalConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#create ExpressConnectVirtualPhysicalConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#delete ExpressConnectVirtualPhysicalConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#update ExpressConnectVirtualPhysicalConnection#update}
  */
  readonly update?: string;
}

export function expressConnectVirtualPhysicalConnectionTimeoutsToTerraform(struct?: ExpressConnectVirtualPhysicalConnectionTimeouts | cdktf.IResolvable): any {
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


export function expressConnectVirtualPhysicalConnectionTimeoutsToHclTerraform(struct?: ExpressConnectVirtualPhysicalConnectionTimeouts | cdktf.IResolvable): any {
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

export class ExpressConnectVirtualPhysicalConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExpressConnectVirtualPhysicalConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExpressConnectVirtualPhysicalConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection alicloud_express_connect_virtual_physical_connection}
*/
export class ExpressConnectVirtualPhysicalConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_express_connect_virtual_physical_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressConnectVirtualPhysicalConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressConnectVirtualPhysicalConnection to import
  * @param importFromId The id of the existing ExpressConnectVirtualPhysicalConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressConnectVirtualPhysicalConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_express_connect_virtual_physical_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_virtual_physical_connection alicloud_express_connect_virtual_physical_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressConnectVirtualPhysicalConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressConnectVirtualPhysicalConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_express_connect_virtual_physical_connection',
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
    this._description = config.description;
    this._dryRun = config.dryRun;
    this._expectSpec = config.expectSpec;
    this._id = config.id;
    this._orderMode = config.orderMode;
    this._parentPhysicalConnectionId = config.parentPhysicalConnectionId;
    this._resourceGroupId = config.resourceGroupId;
    this._spec = config.spec;
    this._virtualPhysicalConnectionName = config.virtualPhysicalConnectionName;
    this._vlanId = config.vlanId;
    this._vpconnAliUid = config.vpconnAliUid;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // ad_location - computed: true, optional: false, required: false
  public get adLocation() {
    return this.getStringAttribute('ad_location');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }

  // business_status - computed: true, optional: false, required: false
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }

  // circuit_code - computed: true, optional: false, required: false
  public get circuitCode() {
    return this.getStringAttribute('circuit_code');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // enabled_time - computed: true, optional: false, required: false
  public get enabledTime() {
    return this.getStringAttribute('enabled_time');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // expect_spec - computed: false, optional: true, required: false
  private _expectSpec?: string; 
  public get expectSpec() {
    return this.getStringAttribute('expect_spec');
  }
  public set expectSpec(value: string) {
    this._expectSpec = value;
  }
  public resetExpectSpec() {
    this._expectSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectSpecInput() {
    return this._expectSpec;
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

  // line_operator - computed: true, optional: false, required: false
  public get lineOperator() {
    return this.getStringAttribute('line_operator');
  }

  // loa_status - computed: true, optional: false, required: false
  public get loaStatus() {
    return this.getStringAttribute('loa_status');
  }

  // order_mode - computed: false, optional: false, required: true
  private _orderMode?: string; 
  public get orderMode() {
    return this.getStringAttribute('order_mode');
  }
  public set orderMode(value: string) {
    this._orderMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderModeInput() {
    return this._orderMode;
  }

  // parent_physical_connection_ali_uid - computed: true, optional: false, required: false
  public get parentPhysicalConnectionAliUid() {
    return this.getStringAttribute('parent_physical_connection_ali_uid');
  }

  // parent_physical_connection_id - computed: false, optional: false, required: true
  private _parentPhysicalConnectionId?: string; 
  public get parentPhysicalConnectionId() {
    return this.getStringAttribute('parent_physical_connection_id');
  }
  public set parentPhysicalConnectionId(value: string) {
    this._parentPhysicalConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPhysicalConnectionIdInput() {
    return this._parentPhysicalConnectionId;
  }

  // peer_location - computed: true, optional: false, required: false
  public get peerLocation() {
    return this.getStringAttribute('peer_location');
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getStringAttribute('port_number');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // redundant_physical_connection_id - computed: true, optional: false, required: false
  public get redundantPhysicalConnectionId() {
    return this.getStringAttribute('redundant_physical_connection_id');
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

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // virtual_physical_connection_name - computed: false, optional: true, required: false
  private _virtualPhysicalConnectionName?: string; 
  public get virtualPhysicalConnectionName() {
    return this.getStringAttribute('virtual_physical_connection_name');
  }
  public set virtualPhysicalConnectionName(value: string) {
    this._virtualPhysicalConnectionName = value;
  }
  public resetVirtualPhysicalConnectionName() {
    this._virtualPhysicalConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPhysicalConnectionNameInput() {
    return this._virtualPhysicalConnectionName;
  }

  // virtual_physical_connection_status - computed: true, optional: false, required: false
  public get virtualPhysicalConnectionStatus() {
    return this.getStringAttribute('virtual_physical_connection_status');
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vpconn_ali_uid - computed: false, optional: false, required: true
  private _vpconnAliUid?: string; 
  public get vpconnAliUid() {
    return this.getStringAttribute('vpconn_ali_uid');
  }
  public set vpconnAliUid(value: string) {
    this._vpconnAliUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpconnAliUidInput() {
    return this._vpconnAliUid;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressConnectVirtualPhysicalConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressConnectVirtualPhysicalConnectionTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      expect_spec: cdktf.stringToTerraform(this._expectSpec),
      id: cdktf.stringToTerraform(this._id),
      order_mode: cdktf.stringToTerraform(this._orderMode),
      parent_physical_connection_id: cdktf.stringToTerraform(this._parentPhysicalConnectionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      spec: cdktf.stringToTerraform(this._spec),
      virtual_physical_connection_name: cdktf.stringToTerraform(this._virtualPhysicalConnectionName),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vpconn_ali_uid: cdktf.stringToTerraform(this._vpconnAliUid),
      timeouts: expressConnectVirtualPhysicalConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expect_spec: {
        value: cdktf.stringToHclTerraform(this._expectSpec),
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
      order_mode: {
        value: cdktf.stringToHclTerraform(this._orderMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_physical_connection_id: {
        value: cdktf.stringToHclTerraform(this._parentPhysicalConnectionId),
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
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_physical_connection_name: {
        value: cdktf.stringToHclTerraform(this._virtualPhysicalConnectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpconn_ali_uid: {
        value: cdktf.stringToHclTerraform(this._vpconnAliUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: expressConnectVirtualPhysicalConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExpressConnectVirtualPhysicalConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
