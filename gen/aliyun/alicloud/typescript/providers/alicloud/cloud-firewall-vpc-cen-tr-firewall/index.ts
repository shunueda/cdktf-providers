// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallVpcCenTrFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#cen_id CloudFirewallVpcCenTrFirewall#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#firewall_description CloudFirewallVpcCenTrFirewall#firewall_description}
  */
  readonly firewallDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#firewall_name CloudFirewallVpcCenTrFirewall#firewall_name}
  */
  readonly firewallName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#firewall_subnet_cidr CloudFirewallVpcCenTrFirewall#firewall_subnet_cidr}
  */
  readonly firewallSubnetCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#firewall_vpc_cidr CloudFirewallVpcCenTrFirewall#firewall_vpc_cidr}
  */
  readonly firewallVpcCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#id CloudFirewallVpcCenTrFirewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#region_no CloudFirewallVpcCenTrFirewall#region_no}
  */
  readonly regionNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#route_mode CloudFirewallVpcCenTrFirewall#route_mode}
  */
  readonly routeMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#tr_attachment_master_cidr CloudFirewallVpcCenTrFirewall#tr_attachment_master_cidr}
  */
  readonly trAttachmentMasterCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#tr_attachment_master_zone CloudFirewallVpcCenTrFirewall#tr_attachment_master_zone}
  */
  readonly trAttachmentMasterZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#tr_attachment_slave_cidr CloudFirewallVpcCenTrFirewall#tr_attachment_slave_cidr}
  */
  readonly trAttachmentSlaveCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#tr_attachment_slave_zone CloudFirewallVpcCenTrFirewall#tr_attachment_slave_zone}
  */
  readonly trAttachmentSlaveZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#transit_router_id CloudFirewallVpcCenTrFirewall#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#timeouts CloudFirewallVpcCenTrFirewall#timeouts}
  */
  readonly timeouts?: CloudFirewallVpcCenTrFirewallTimeouts;
}
export interface CloudFirewallVpcCenTrFirewallTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#create CloudFirewallVpcCenTrFirewall#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#delete CloudFirewallVpcCenTrFirewall#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#update CloudFirewallVpcCenTrFirewall#update}
  */
  readonly update?: string;
}

export function cloudFirewallVpcCenTrFirewallTimeoutsToTerraform(struct?: CloudFirewallVpcCenTrFirewallTimeouts | cdktf.IResolvable): any {
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


export function cloudFirewallVpcCenTrFirewallTimeoutsToHclTerraform(struct?: CloudFirewallVpcCenTrFirewallTimeouts | cdktf.IResolvable): any {
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

export class CloudFirewallVpcCenTrFirewallTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudFirewallVpcCenTrFirewallTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudFirewallVpcCenTrFirewallTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall alicloud_cloud_firewall_vpc_cen_tr_firewall}
*/
export class CloudFirewallVpcCenTrFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_vpc_cen_tr_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallVpcCenTrFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallVpcCenTrFirewall to import
  * @param importFromId The id of the existing CloudFirewallVpcCenTrFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallVpcCenTrFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_vpc_cen_tr_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_cen_tr_firewall alicloud_cloud_firewall_vpc_cen_tr_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallVpcCenTrFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallVpcCenTrFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_vpc_cen_tr_firewall',
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
    this._cenId = config.cenId;
    this._firewallDescription = config.firewallDescription;
    this._firewallName = config.firewallName;
    this._firewallSubnetCidr = config.firewallSubnetCidr;
    this._firewallVpcCidr = config.firewallVpcCidr;
    this._id = config.id;
    this._regionNo = config.regionNo;
    this._routeMode = config.routeMode;
    this._trAttachmentMasterCidr = config.trAttachmentMasterCidr;
    this._trAttachmentMasterZone = config.trAttachmentMasterZone;
    this._trAttachmentSlaveCidr = config.trAttachmentSlaveCidr;
    this._trAttachmentSlaveZone = config.trAttachmentSlaveZone;
    this._transitRouterId = config.transitRouterId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // firewall_description - computed: false, optional: true, required: false
  private _firewallDescription?: string; 
  public get firewallDescription() {
    return this.getStringAttribute('firewall_description');
  }
  public set firewallDescription(value: string) {
    this._firewallDescription = value;
  }
  public resetFirewallDescription() {
    this._firewallDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallDescriptionInput() {
    return this._firewallDescription;
  }

  // firewall_name - computed: false, optional: false, required: true
  private _firewallName?: string; 
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }
  public set firewallName(value: string) {
    this._firewallName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallNameInput() {
    return this._firewallName;
  }

  // firewall_subnet_cidr - computed: false, optional: false, required: true
  private _firewallSubnetCidr?: string; 
  public get firewallSubnetCidr() {
    return this.getStringAttribute('firewall_subnet_cidr');
  }
  public set firewallSubnetCidr(value: string) {
    this._firewallSubnetCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSubnetCidrInput() {
    return this._firewallSubnetCidr;
  }

  // firewall_vpc_cidr - computed: false, optional: false, required: true
  private _firewallVpcCidr?: string; 
  public get firewallVpcCidr() {
    return this.getStringAttribute('firewall_vpc_cidr');
  }
  public set firewallVpcCidr(value: string) {
    this._firewallVpcCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallVpcCidrInput() {
    return this._firewallVpcCidr;
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

  // region_no - computed: false, optional: false, required: true
  private _regionNo?: string; 
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }
  public set regionNo(value: string) {
    this._regionNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNoInput() {
    return this._regionNo;
  }

  // route_mode - computed: false, optional: false, required: true
  private _routeMode?: string; 
  public get routeMode() {
    return this.getStringAttribute('route_mode');
  }
  public set routeMode(value: string) {
    this._routeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeModeInput() {
    return this._routeMode;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tr_attachment_master_cidr - computed: false, optional: false, required: true
  private _trAttachmentMasterCidr?: string; 
  public get trAttachmentMasterCidr() {
    return this.getStringAttribute('tr_attachment_master_cidr');
  }
  public set trAttachmentMasterCidr(value: string) {
    this._trAttachmentMasterCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trAttachmentMasterCidrInput() {
    return this._trAttachmentMasterCidr;
  }

  // tr_attachment_master_zone - computed: false, optional: true, required: false
  private _trAttachmentMasterZone?: string; 
  public get trAttachmentMasterZone() {
    return this.getStringAttribute('tr_attachment_master_zone');
  }
  public set trAttachmentMasterZone(value: string) {
    this._trAttachmentMasterZone = value;
  }
  public resetTrAttachmentMasterZone() {
    this._trAttachmentMasterZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trAttachmentMasterZoneInput() {
    return this._trAttachmentMasterZone;
  }

  // tr_attachment_slave_cidr - computed: false, optional: false, required: true
  private _trAttachmentSlaveCidr?: string; 
  public get trAttachmentSlaveCidr() {
    return this.getStringAttribute('tr_attachment_slave_cidr');
  }
  public set trAttachmentSlaveCidr(value: string) {
    this._trAttachmentSlaveCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trAttachmentSlaveCidrInput() {
    return this._trAttachmentSlaveCidr;
  }

  // tr_attachment_slave_zone - computed: false, optional: true, required: false
  private _trAttachmentSlaveZone?: string; 
  public get trAttachmentSlaveZone() {
    return this.getStringAttribute('tr_attachment_slave_zone');
  }
  public set trAttachmentSlaveZone(value: string) {
    this._trAttachmentSlaveZone = value;
  }
  public resetTrAttachmentSlaveZone() {
    this._trAttachmentSlaveZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trAttachmentSlaveZoneInput() {
    return this._trAttachmentSlaveZone;
  }

  // transit_router_id - computed: false, optional: false, required: true
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudFirewallVpcCenTrFirewallTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudFirewallVpcCenTrFirewallTimeouts) {
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
      cen_id: cdktf.stringToTerraform(this._cenId),
      firewall_description: cdktf.stringToTerraform(this._firewallDescription),
      firewall_name: cdktf.stringToTerraform(this._firewallName),
      firewall_subnet_cidr: cdktf.stringToTerraform(this._firewallSubnetCidr),
      firewall_vpc_cidr: cdktf.stringToTerraform(this._firewallVpcCidr),
      id: cdktf.stringToTerraform(this._id),
      region_no: cdktf.stringToTerraform(this._regionNo),
      route_mode: cdktf.stringToTerraform(this._routeMode),
      tr_attachment_master_cidr: cdktf.stringToTerraform(this._trAttachmentMasterCidr),
      tr_attachment_master_zone: cdktf.stringToTerraform(this._trAttachmentMasterZone),
      tr_attachment_slave_cidr: cdktf.stringToTerraform(this._trAttachmentSlaveCidr),
      tr_attachment_slave_zone: cdktf.stringToTerraform(this._trAttachmentSlaveZone),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      timeouts: cloudFirewallVpcCenTrFirewallTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_description: {
        value: cdktf.stringToHclTerraform(this._firewallDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_name: {
        value: cdktf.stringToHclTerraform(this._firewallName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._firewallSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_vpc_cidr: {
        value: cdktf.stringToHclTerraform(this._firewallVpcCidr),
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
      region_no: {
        value: cdktf.stringToHclTerraform(this._regionNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_mode: {
        value: cdktf.stringToHclTerraform(this._routeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tr_attachment_master_cidr: {
        value: cdktf.stringToHclTerraform(this._trAttachmentMasterCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tr_attachment_master_zone: {
        value: cdktf.stringToHclTerraform(this._trAttachmentMasterZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tr_attachment_slave_cidr: {
        value: cdktf.stringToHclTerraform(this._trAttachmentSlaveCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tr_attachment_slave_zone: {
        value: cdktf.stringToHclTerraform(this._trAttachmentSlaveZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudFirewallVpcCenTrFirewallTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudFirewallVpcCenTrFirewallTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
