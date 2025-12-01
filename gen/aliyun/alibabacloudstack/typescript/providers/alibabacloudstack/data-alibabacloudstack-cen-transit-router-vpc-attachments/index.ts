// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackCenTransitRouterVpcAttachmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#cen_id DataAlibabacloudstackCenTransitRouterVpcAttachments#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#description_regex DataAlibabacloudstackCenTransitRouterVpcAttachments#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#id DataAlibabacloudstackCenTransitRouterVpcAttachments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#ids DataAlibabacloudstackCenTransitRouterVpcAttachments#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#name_regex DataAlibabacloudstackCenTransitRouterVpcAttachments#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#transit_router_id DataAlibabacloudstackCenTransitRouterVpcAttachments#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#vpc_id DataAlibabacloudstackCenTransitRouterVpcAttachments#vpc_id}
  */
  readonly vpcId: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#tags DataAlibabacloudstackCenTransitRouterVpcAttachments#tags}
  */
  readonly tags?: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTags[] | cdktf.IResolvable;
}
export interface DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappings {
}

export function dataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappingsToTerraform(struct?: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappingsToHclTerraform(struct?: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappingsOutputReference {
    return new DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachments {
}

export function dataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsToTerraform(struct?: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsToHclTerraform(struct?: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_publish_route_enabled - computed: true, optional: false, required: false
  public get autoPublishRouteEnabled() {
    return this.getBooleanAttribute('auto_publish_route_enabled');
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_attachment_description - computed: true, optional: false, required: false
  public get transitRouterAttachmentDescription() {
    return this.getStringAttribute('transit_router_attachment_description');
  }

  // transit_router_attachment_id - computed: true, optional: false, required: false
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }

  // transit_router_attachment_name - computed: true, optional: false, required: false
  public get transitRouterAttachmentName() {
    return this.getStringAttribute('transit_router_attachment_name');
  }

  // transit_router_id - computed: true, optional: false, required: false
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone_mappings - computed: true, optional: false, required: false
  private _zoneMappings = new DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsZoneMappingsList(this, "zone_mappings", true);
  public get zoneMappings() {
    return this._zoneMappings;
  }
}

export class DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsOutputReference {
    return new DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackCenTransitRouterVpcAttachmentsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#tag_key DataAlibabacloudstackCenTransitRouterVpcAttachments#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#tag_value DataAlibabacloudstackCenTransitRouterVpcAttachments#tag_value}
  */
  readonly tagValue?: string;
}

export function dataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsToTerraform(struct?: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function dataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsToHclTerraform(struct?: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTags | cdktf.IResolvable): any {
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

export class DataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackCenTransitRouterVpcAttachmentsTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTags | cdktf.IResolvable | undefined) {
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

export class DataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsList extends cdktf.ComplexList {
  public internalValue? : DataAlibabacloudstackCenTransitRouterVpcAttachmentsTags[] | cdktf.IResolvable

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
  public get(index: number): DataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsOutputReference {
    return new DataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments alibabacloudstack_cen_transit_router_vpc_attachments}
*/
export class DataAlibabacloudstackCenTransitRouterVpcAttachments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cen_transit_router_vpc_attachments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackCenTransitRouterVpcAttachments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackCenTransitRouterVpcAttachments to import
  * @param importFromId The id of the existing DataAlibabacloudstackCenTransitRouterVpcAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackCenTransitRouterVpcAttachments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cen_transit_router_vpc_attachments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/cen_transit_router_vpc_attachments alibabacloudstack_cen_transit_router_vpc_attachments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackCenTransitRouterVpcAttachmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackCenTransitRouterVpcAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cen_transit_router_vpc_attachments',
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
    this._cenId = config.cenId;
    this._descriptionRegex = config.descriptionRegex;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._transitRouterId = config.transitRouterId;
    this._vpcId = config.vpcId;
    this._tags.internalValue = config.tags;
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

  // description_regex - computed: false, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
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

  // transitrouterattachments - computed: true, optional: false, required: false
  private _transitrouterattachments = new DataAlibabacloudstackCenTransitRouterVpcAttachmentsTransitrouterattachmentsList(this, "transitrouterattachments", true);
  public get transitrouterattachments() {
    return this._transitrouterattachments;
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

  // tags - computed: false, optional: true, required: false
  private _tags = new DataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataAlibabacloudstackCenTransitRouterVpcAttachmentsTags[] | cdktf.IResolvable) {
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
      cen_id: cdktf.stringToTerraform(this._cenId),
      description_regex: cdktf.stringToTerraform(this._descriptionRegex),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      tags: cdktf.listMapper(dataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsToTerraform, true)(this._tags.internalValue),
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
      description_regex: {
        value: cdktf.stringToHclTerraform(this._descriptionRegex),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(dataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAlibabacloudstackCenTransitRouterVpcAttachmentsTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
