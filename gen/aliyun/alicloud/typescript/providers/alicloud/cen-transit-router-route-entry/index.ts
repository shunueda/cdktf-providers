// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterRouteEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#dry_run CenTransitRouterRouteEntry#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#id CenTransitRouterRouteEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#transit_router_route_entry_description CenTransitRouterRouteEntry#transit_router_route_entry_description}
  */
  readonly transitRouterRouteEntryDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#transit_router_route_entry_destination_cidr_block CenTransitRouterRouteEntry#transit_router_route_entry_destination_cidr_block}
  */
  readonly transitRouterRouteEntryDestinationCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#transit_router_route_entry_name CenTransitRouterRouteEntry#transit_router_route_entry_name}
  */
  readonly transitRouterRouteEntryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#transit_router_route_entry_next_hop_id CenTransitRouterRouteEntry#transit_router_route_entry_next_hop_id}
  */
  readonly transitRouterRouteEntryNextHopId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#transit_router_route_entry_next_hop_type CenTransitRouterRouteEntry#transit_router_route_entry_next_hop_type}
  */
  readonly transitRouterRouteEntryNextHopType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#transit_router_route_table_id CenTransitRouterRouteEntry#transit_router_route_table_id}
  */
  readonly transitRouterRouteTableId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#timeouts CenTransitRouterRouteEntry#timeouts}
  */
  readonly timeouts?: CenTransitRouterRouteEntryTimeouts;
}
export interface CenTransitRouterRouteEntryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#create CenTransitRouterRouteEntry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#delete CenTransitRouterRouteEntry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#update CenTransitRouterRouteEntry#update}
  */
  readonly update?: string;
}

export function cenTransitRouterRouteEntryTimeoutsToTerraform(struct?: CenTransitRouterRouteEntryTimeouts | cdktf.IResolvable): any {
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


export function cenTransitRouterRouteEntryTimeoutsToHclTerraform(struct?: CenTransitRouterRouteEntryTimeouts | cdktf.IResolvable): any {
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

export class CenTransitRouterRouteEntryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenTransitRouterRouteEntryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CenTransitRouterRouteEntryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry alicloud_cen_transit_router_route_entry}
*/
export class CenTransitRouterRouteEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_transit_router_route_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterRouteEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterRouteEntry to import
  * @param importFromId The id of the existing CenTransitRouterRouteEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterRouteEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_transit_router_route_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_route_entry alicloud_cen_transit_router_route_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterRouteEntryConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterRouteEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_transit_router_route_entry',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._transitRouterRouteEntryDescription = config.transitRouterRouteEntryDescription;
    this._transitRouterRouteEntryDestinationCidrBlock = config.transitRouterRouteEntryDestinationCidrBlock;
    this._transitRouterRouteEntryName = config.transitRouterRouteEntryName;
    this._transitRouterRouteEntryNextHopId = config.transitRouterRouteEntryNextHopId;
    this._transitRouterRouteEntryNextHopType = config.transitRouterRouteEntryNextHopType;
    this._transitRouterRouteTableId = config.transitRouterRouteTableId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_route_entry_description - computed: false, optional: true, required: false
  private _transitRouterRouteEntryDescription?: string; 
  public get transitRouterRouteEntryDescription() {
    return this.getStringAttribute('transit_router_route_entry_description');
  }
  public set transitRouterRouteEntryDescription(value: string) {
    this._transitRouterRouteEntryDescription = value;
  }
  public resetTransitRouterRouteEntryDescription() {
    this._transitRouterRouteEntryDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryDescriptionInput() {
    return this._transitRouterRouteEntryDescription;
  }

  // transit_router_route_entry_destination_cidr_block - computed: false, optional: false, required: true
  private _transitRouterRouteEntryDestinationCidrBlock?: string; 
  public get transitRouterRouteEntryDestinationCidrBlock() {
    return this.getStringAttribute('transit_router_route_entry_destination_cidr_block');
  }
  public set transitRouterRouteEntryDestinationCidrBlock(value: string) {
    this._transitRouterRouteEntryDestinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryDestinationCidrBlockInput() {
    return this._transitRouterRouteEntryDestinationCidrBlock;
  }

  // transit_router_route_entry_id - computed: true, optional: false, required: false
  public get transitRouterRouteEntryId() {
    return this.getStringAttribute('transit_router_route_entry_id');
  }

  // transit_router_route_entry_name - computed: false, optional: true, required: false
  private _transitRouterRouteEntryName?: string; 
  public get transitRouterRouteEntryName() {
    return this.getStringAttribute('transit_router_route_entry_name');
  }
  public set transitRouterRouteEntryName(value: string) {
    this._transitRouterRouteEntryName = value;
  }
  public resetTransitRouterRouteEntryName() {
    this._transitRouterRouteEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryNameInput() {
    return this._transitRouterRouteEntryName;
  }

  // transit_router_route_entry_next_hop_id - computed: false, optional: true, required: false
  private _transitRouterRouteEntryNextHopId?: string; 
  public get transitRouterRouteEntryNextHopId() {
    return this.getStringAttribute('transit_router_route_entry_next_hop_id');
  }
  public set transitRouterRouteEntryNextHopId(value: string) {
    this._transitRouterRouteEntryNextHopId = value;
  }
  public resetTransitRouterRouteEntryNextHopId() {
    this._transitRouterRouteEntryNextHopId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryNextHopIdInput() {
    return this._transitRouterRouteEntryNextHopId;
  }

  // transit_router_route_entry_next_hop_type - computed: false, optional: false, required: true
  private _transitRouterRouteEntryNextHopType?: string; 
  public get transitRouterRouteEntryNextHopType() {
    return this.getStringAttribute('transit_router_route_entry_next_hop_type');
  }
  public set transitRouterRouteEntryNextHopType(value: string) {
    this._transitRouterRouteEntryNextHopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryNextHopTypeInput() {
    return this._transitRouterRouteEntryNextHopType;
  }

  // transit_router_route_table_id - computed: false, optional: false, required: true
  private _transitRouterRouteTableId?: string; 
  public get transitRouterRouteTableId() {
    return this.getStringAttribute('transit_router_route_table_id');
  }
  public set transitRouterRouteTableId(value: string) {
    this._transitRouterRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableIdInput() {
    return this._transitRouterRouteTableId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenTransitRouterRouteEntryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenTransitRouterRouteEntryTimeouts) {
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
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      transit_router_route_entry_description: cdktf.stringToTerraform(this._transitRouterRouteEntryDescription),
      transit_router_route_entry_destination_cidr_block: cdktf.stringToTerraform(this._transitRouterRouteEntryDestinationCidrBlock),
      transit_router_route_entry_name: cdktf.stringToTerraform(this._transitRouterRouteEntryName),
      transit_router_route_entry_next_hop_id: cdktf.stringToTerraform(this._transitRouterRouteEntryNextHopId),
      transit_router_route_entry_next_hop_type: cdktf.stringToTerraform(this._transitRouterRouteEntryNextHopType),
      transit_router_route_table_id: cdktf.stringToTerraform(this._transitRouterRouteTableId),
      timeouts: cenTransitRouterRouteEntryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_entry_description: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_entry_destination_cidr_block: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryDestinationCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_entry_name: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_entry_next_hop_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryNextHopId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_entry_next_hop_type: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryNextHopType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_table_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cenTransitRouterRouteEntryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenTransitRouterRouteEntryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
