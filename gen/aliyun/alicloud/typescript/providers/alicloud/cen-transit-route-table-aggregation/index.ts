// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouteTableAggregationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#id CenTransitRouteTableAggregation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#transit_route_table_aggregation_cidr CenTransitRouteTableAggregation#transit_route_table_aggregation_cidr}
  */
  readonly transitRouteTableAggregationCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#transit_route_table_aggregation_description CenTransitRouteTableAggregation#transit_route_table_aggregation_description}
  */
  readonly transitRouteTableAggregationDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#transit_route_table_aggregation_name CenTransitRouteTableAggregation#transit_route_table_aggregation_name}
  */
  readonly transitRouteTableAggregationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#transit_route_table_aggregation_scope CenTransitRouteTableAggregation#transit_route_table_aggregation_scope}
  */
  readonly transitRouteTableAggregationScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#transit_route_table_aggregation_scope_list CenTransitRouteTableAggregation#transit_route_table_aggregation_scope_list}
  */
  readonly transitRouteTableAggregationScopeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#transit_route_table_id CenTransitRouteTableAggregation#transit_route_table_id}
  */
  readonly transitRouteTableId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#timeouts CenTransitRouteTableAggregation#timeouts}
  */
  readonly timeouts?: CenTransitRouteTableAggregationTimeouts;
}
export interface CenTransitRouteTableAggregationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#create CenTransitRouteTableAggregation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#delete CenTransitRouteTableAggregation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#update CenTransitRouteTableAggregation#update}
  */
  readonly update?: string;
}

export function cenTransitRouteTableAggregationTimeoutsToTerraform(struct?: CenTransitRouteTableAggregationTimeouts | cdktf.IResolvable): any {
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


export function cenTransitRouteTableAggregationTimeoutsToHclTerraform(struct?: CenTransitRouteTableAggregationTimeouts | cdktf.IResolvable): any {
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

export class CenTransitRouteTableAggregationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenTransitRouteTableAggregationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CenTransitRouteTableAggregationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation alicloud_cen_transit_route_table_aggregation}
*/
export class CenTransitRouteTableAggregation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_transit_route_table_aggregation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouteTableAggregation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouteTableAggregation to import
  * @param importFromId The id of the existing CenTransitRouteTableAggregation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouteTableAggregation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_transit_route_table_aggregation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_transit_route_table_aggregation alicloud_cen_transit_route_table_aggregation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouteTableAggregationConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouteTableAggregationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_transit_route_table_aggregation',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
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
    this._transitRouteTableAggregationCidr = config.transitRouteTableAggregationCidr;
    this._transitRouteTableAggregationDescription = config.transitRouteTableAggregationDescription;
    this._transitRouteTableAggregationName = config.transitRouteTableAggregationName;
    this._transitRouteTableAggregationScope = config.transitRouteTableAggregationScope;
    this._transitRouteTableAggregationScopeList = config.transitRouteTableAggregationScopeList;
    this._transitRouteTableId = config.transitRouteTableId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // transit_route_table_aggregation_cidr - computed: false, optional: false, required: true
  private _transitRouteTableAggregationCidr?: string; 
  public get transitRouteTableAggregationCidr() {
    return this.getStringAttribute('transit_route_table_aggregation_cidr');
  }
  public set transitRouteTableAggregationCidr(value: string) {
    this._transitRouteTableAggregationCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouteTableAggregationCidrInput() {
    return this._transitRouteTableAggregationCidr;
  }

  // transit_route_table_aggregation_description - computed: false, optional: true, required: false
  private _transitRouteTableAggregationDescription?: string; 
  public get transitRouteTableAggregationDescription() {
    return this.getStringAttribute('transit_route_table_aggregation_description');
  }
  public set transitRouteTableAggregationDescription(value: string) {
    this._transitRouteTableAggregationDescription = value;
  }
  public resetTransitRouteTableAggregationDescription() {
    this._transitRouteTableAggregationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouteTableAggregationDescriptionInput() {
    return this._transitRouteTableAggregationDescription;
  }

  // transit_route_table_aggregation_name - computed: false, optional: true, required: false
  private _transitRouteTableAggregationName?: string; 
  public get transitRouteTableAggregationName() {
    return this.getStringAttribute('transit_route_table_aggregation_name');
  }
  public set transitRouteTableAggregationName(value: string) {
    this._transitRouteTableAggregationName = value;
  }
  public resetTransitRouteTableAggregationName() {
    this._transitRouteTableAggregationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouteTableAggregationNameInput() {
    return this._transitRouteTableAggregationName;
  }

  // transit_route_table_aggregation_scope - computed: false, optional: true, required: false
  private _transitRouteTableAggregationScope?: string; 
  public get transitRouteTableAggregationScope() {
    return this.getStringAttribute('transit_route_table_aggregation_scope');
  }
  public set transitRouteTableAggregationScope(value: string) {
    this._transitRouteTableAggregationScope = value;
  }
  public resetTransitRouteTableAggregationScope() {
    this._transitRouteTableAggregationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouteTableAggregationScopeInput() {
    return this._transitRouteTableAggregationScope;
  }

  // transit_route_table_aggregation_scope_list - computed: false, optional: true, required: false
  private _transitRouteTableAggregationScopeList?: string[]; 
  public get transitRouteTableAggregationScopeList() {
    return cdktf.Fn.tolist(this.getListAttribute('transit_route_table_aggregation_scope_list'));
  }
  public set transitRouteTableAggregationScopeList(value: string[]) {
    this._transitRouteTableAggregationScopeList = value;
  }
  public resetTransitRouteTableAggregationScopeList() {
    this._transitRouteTableAggregationScopeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouteTableAggregationScopeListInput() {
    return this._transitRouteTableAggregationScopeList;
  }

  // transit_route_table_id - computed: false, optional: false, required: true
  private _transitRouteTableId?: string; 
  public get transitRouteTableId() {
    return this.getStringAttribute('transit_route_table_id');
  }
  public set transitRouteTableId(value: string) {
    this._transitRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouteTableIdInput() {
    return this._transitRouteTableId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenTransitRouteTableAggregationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenTransitRouteTableAggregationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      transit_route_table_aggregation_cidr: cdktf.stringToTerraform(this._transitRouteTableAggregationCidr),
      transit_route_table_aggregation_description: cdktf.stringToTerraform(this._transitRouteTableAggregationDescription),
      transit_route_table_aggregation_name: cdktf.stringToTerraform(this._transitRouteTableAggregationName),
      transit_route_table_aggregation_scope: cdktf.stringToTerraform(this._transitRouteTableAggregationScope),
      transit_route_table_aggregation_scope_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitRouteTableAggregationScopeList),
      transit_route_table_id: cdktf.stringToTerraform(this._transitRouteTableId),
      timeouts: cenTransitRouteTableAggregationTimeoutsToTerraform(this._timeouts.internalValue),
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
      transit_route_table_aggregation_cidr: {
        value: cdktf.stringToHclTerraform(this._transitRouteTableAggregationCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_route_table_aggregation_description: {
        value: cdktf.stringToHclTerraform(this._transitRouteTableAggregationDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_route_table_aggregation_name: {
        value: cdktf.stringToHclTerraform(this._transitRouteTableAggregationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_route_table_aggregation_scope: {
        value: cdktf.stringToHclTerraform(this._transitRouteTableAggregationScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_route_table_aggregation_scope_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitRouteTableAggregationScopeList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      transit_route_table_id: {
        value: cdktf.stringToHclTerraform(this._transitRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cenTransitRouteTableAggregationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenTransitRouteTableAggregationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
