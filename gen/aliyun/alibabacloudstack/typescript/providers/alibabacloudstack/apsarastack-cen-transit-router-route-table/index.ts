// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackCenTransitRouterRouteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table#id ApsarastackCenTransitRouterRouteTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the transit router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table#transit_router_id ApsarastackCenTransitRouterRouteTable#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * The description of the route table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table#transit_router_route_table_description ApsarastackCenTransitRouterRouteTable#transit_router_route_table_description}
  */
  readonly transitRouterRouteTableDescription?: string;
  /**
  * The name of the route table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table#transit_router_route_table_name ApsarastackCenTransitRouterRouteTable#transit_router_route_table_name}
  */
  readonly transitRouterRouteTableName?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table#tags ApsarastackCenTransitRouterRouteTable#tags}
  */
  readonly tags?: ApsarastackCenTransitRouterRouteTableTags[] | cdktf.IResolvable;
}
export interface ApsarastackCenTransitRouterRouteTableTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table#tag_key ApsarastackCenTransitRouterRouteTable#tag_key}
  */
  readonly tagKey?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table#tag_value ApsarastackCenTransitRouterRouteTable#tag_value}
  */
  readonly tagValue?: string;
}

export function apsarastackCenTransitRouterRouteTableTagsToTerraform(struct?: ApsarastackCenTransitRouterRouteTableTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function apsarastackCenTransitRouterRouteTableTagsToHclTerraform(struct?: ApsarastackCenTransitRouterRouteTableTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackCenTransitRouterRouteTableTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackCenTransitRouterRouteTableTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCenTransitRouterRouteTableTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class ApsarastackCenTransitRouterRouteTableTagsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackCenTransitRouterRouteTableTags[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackCenTransitRouterRouteTableTagsOutputReference {
    return new ApsarastackCenTransitRouterRouteTableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table apsarastack_cen_transit_router_route_table}
*/
export class ApsarastackCenTransitRouterRouteTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_cen_transit_router_route_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackCenTransitRouterRouteTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackCenTransitRouterRouteTable to import
  * @param importFromId The id of the existing ApsarastackCenTransitRouterRouteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackCenTransitRouterRouteTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_cen_transit_router_route_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_transit_router_route_table apsarastack_cen_transit_router_route_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackCenTransitRouterRouteTableConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackCenTransitRouterRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_cen_transit_router_route_table',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._transitRouterId = config.transitRouterId;
    this._transitRouterRouteTableDescription = config.transitRouterRouteTableDescription;
    this._transitRouterRouteTableName = config.transitRouterRouteTableName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // transit_router_route_table_description - computed: true, optional: true, required: false
  private _transitRouterRouteTableDescription?: string; 
  public get transitRouterRouteTableDescription() {
    return this.getStringAttribute('transit_router_route_table_description');
  }
  public set transitRouterRouteTableDescription(value: string) {
    this._transitRouterRouteTableDescription = value;
  }
  public resetTransitRouterRouteTableDescription() {
    this._transitRouterRouteTableDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableDescriptionInput() {
    return this._transitRouterRouteTableDescription;
  }

  // transit_router_route_table_id - computed: true, optional: false, required: false
  public get transitRouterRouteTableId() {
    return this.getStringAttribute('transit_router_route_table_id');
  }

  // transit_router_route_table_name - computed: true, optional: true, required: false
  private _transitRouterRouteTableName?: string; 
  public get transitRouterRouteTableName() {
    return this.getStringAttribute('transit_router_route_table_name');
  }
  public set transitRouterRouteTableName(value: string) {
    this._transitRouterRouteTableName = value;
  }
  public resetTransitRouterRouteTableName() {
    this._transitRouterRouteTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableNameInput() {
    return this._transitRouterRouteTableName;
  }

  // transit_router_route_table_type - computed: true, optional: false, required: false
  public get transitRouterRouteTableType() {
    return this.getStringAttribute('transit_router_route_table_type');
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ApsarastackCenTransitRouterRouteTableTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApsarastackCenTransitRouterRouteTableTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      transit_router_route_table_description: cdktf.stringToTerraform(this._transitRouterRouteTableDescription),
      transit_router_route_table_name: cdktf.stringToTerraform(this._transitRouterRouteTableName),
      tags: cdktf.listMapper(apsarastackCenTransitRouterRouteTableTagsToTerraform, true)(this._tags.internalValue),
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
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_table_description: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteTableDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_table_name: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(apsarastackCenTransitRouterRouteTableTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackCenTransitRouterRouteTableTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
