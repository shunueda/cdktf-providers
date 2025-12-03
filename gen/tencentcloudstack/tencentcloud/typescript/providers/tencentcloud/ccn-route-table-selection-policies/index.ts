// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CcnRouteTableSelectionPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * CCN Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies#ccn_id CcnRouteTableSelectionPolicies#ccn_id}
  */
  readonly ccnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies#id CcnRouteTableSelectionPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * selection_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies#selection_policies CcnRouteTableSelectionPolicies#selection_policies}
  */
  readonly selectionPolicies: CcnRouteTableSelectionPoliciesSelectionPolicies[] | cdktf.IResolvable;
}
export interface CcnRouteTableSelectionPoliciesSelectionPolicies {
  /**
  * description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies#description CcnRouteTableSelectionPolicies#description}
  */
  readonly description: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies#instance_id CcnRouteTableSelectionPolicies#instance_id}
  */
  readonly instanceId: string;
  /**
  * Instance Type: Private Network: VPC, Dedicated Gateway: DIRECTCONNECT, Blackstone Private Network: BMVPC, EDGE Device: EDGE, EDGE Tunnel: EDGE_TUNNEL, EDGE Gateway: EDGE_VPNGW, VPN Gateway: VPNGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies#instance_type CcnRouteTableSelectionPolicies#instance_type}
  */
  readonly instanceType: string;
  /**
  * route table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies#route_table_id CcnRouteTableSelectionPolicies#route_table_id}
  */
  readonly routeTableId: string;
  /**
  * Source CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies#source_cidr_block CcnRouteTableSelectionPolicies#source_cidr_block}
  */
  readonly sourceCidrBlock: string;
}

export function ccnRouteTableSelectionPoliciesSelectionPoliciesToTerraform(struct?: CcnRouteTableSelectionPoliciesSelectionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    route_table_id: cdktf.stringToTerraform(struct!.routeTableId),
    source_cidr_block: cdktf.stringToTerraform(struct!.sourceCidrBlock),
  }
}


export function ccnRouteTableSelectionPoliciesSelectionPoliciesToHclTerraform(struct?: CcnRouteTableSelectionPoliciesSelectionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.routeTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CcnRouteTableSelectionPoliciesSelectionPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CcnRouteTableSelectionPoliciesSelectionPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._routeTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableId = this._routeTableId;
    }
    if (this._sourceCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidrBlock = this._sourceCidrBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CcnRouteTableSelectionPoliciesSelectionPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._instanceId = undefined;
      this._instanceType = undefined;
      this._routeTableId = undefined;
      this._sourceCidrBlock = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._instanceId = value.instanceId;
      this._instanceType = value.instanceType;
      this._routeTableId = value.routeTableId;
      this._sourceCidrBlock = value.sourceCidrBlock;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // source_cidr_block - computed: false, optional: false, required: true
  private _sourceCidrBlock?: string; 
  public get sourceCidrBlock() {
    return this.getStringAttribute('source_cidr_block');
  }
  public set sourceCidrBlock(value: string) {
    this._sourceCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrBlockInput() {
    return this._sourceCidrBlock;
  }
}

export class CcnRouteTableSelectionPoliciesSelectionPoliciesList extends cdktf.ComplexList {
  public internalValue? : CcnRouteTableSelectionPoliciesSelectionPolicies[] | cdktf.IResolvable

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
  public get(index: number): CcnRouteTableSelectionPoliciesSelectionPoliciesOutputReference {
    return new CcnRouteTableSelectionPoliciesSelectionPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies tencentcloud_ccn_route_table_selection_policies}
*/
export class CcnRouteTableSelectionPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ccn_route_table_selection_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CcnRouteTableSelectionPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CcnRouteTableSelectionPolicies to import
  * @param importFromId The id of the existing CcnRouteTableSelectionPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CcnRouteTableSelectionPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ccn_route_table_selection_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_route_table_selection_policies tencentcloud_ccn_route_table_selection_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CcnRouteTableSelectionPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: CcnRouteTableSelectionPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ccn_route_table_selection_policies',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccnId = config.ccnId;
    this._id = config.id;
    this._selectionPolicies.internalValue = config.selectionPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ccn_id - computed: false, optional: false, required: true
  private _ccnId?: string; 
  public get ccnId() {
    return this.getStringAttribute('ccn_id');
  }
  public set ccnId(value: string) {
    this._ccnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdInput() {
    return this._ccnId;
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

  // selection_policies - computed: false, optional: false, required: true
  private _selectionPolicies = new CcnRouteTableSelectionPoliciesSelectionPoliciesList(this, "selection_policies", false);
  public get selectionPolicies() {
    return this._selectionPolicies;
  }
  public putSelectionPolicies(value: CcnRouteTableSelectionPoliciesSelectionPolicies[] | cdktf.IResolvable) {
    this._selectionPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionPoliciesInput() {
    return this._selectionPolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ccn_id: cdktf.stringToTerraform(this._ccnId),
      id: cdktf.stringToTerraform(this._id),
      selection_policies: cdktf.listMapper(ccnRouteTableSelectionPoliciesSelectionPoliciesToTerraform, true)(this._selectionPolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccn_id: {
        value: cdktf.stringToHclTerraform(this._ccnId),
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
      selection_policies: {
        value: cdktf.listMapperHcl(ccnRouteTableSelectionPoliciesSelectionPoliciesToHclTerraform, true)(this._selectionPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CcnRouteTableSelectionPoliciesSelectionPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
