// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterMulticastDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain#id CenTransitRouterMulticastDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the transit router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain#transit_router_id CenTransitRouterMulticastDomain#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * The description of the transit router multicast domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain#transit_router_multicast_domain_description CenTransitRouterMulticastDomain#transit_router_multicast_domain_description}
  */
  readonly transitRouterMulticastDomainDescription?: string;
  /**
  * The name of the transit router multicast domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain#transit_router_multicast_domain_name CenTransitRouterMulticastDomain#transit_router_multicast_domain_name}
  */
  readonly transitRouterMulticastDomainName?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain#tags CenTransitRouterMulticastDomain#tags}
  */
  readonly tags?: CenTransitRouterMulticastDomainTags[] | cdktf.IResolvable;
}
export interface CenTransitRouterMulticastDomainTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain#tag_key CenTransitRouterMulticastDomain#tag_key}
  */
  readonly tagKey?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain#tag_value CenTransitRouterMulticastDomain#tag_value}
  */
  readonly tagValue?: string;
}

export function cenTransitRouterMulticastDomainTagsToTerraform(struct?: CenTransitRouterMulticastDomainTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cenTransitRouterMulticastDomainTagsToHclTerraform(struct?: CenTransitRouterMulticastDomainTags | cdktf.IResolvable): any {
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

export class CenTransitRouterMulticastDomainTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CenTransitRouterMulticastDomainTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CenTransitRouterMulticastDomainTags | cdktf.IResolvable | undefined) {
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

export class CenTransitRouterMulticastDomainTagsList extends cdktf.ComplexList {
  public internalValue? : CenTransitRouterMulticastDomainTags[] | cdktf.IResolvable

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
  public get(index: number): CenTransitRouterMulticastDomainTagsOutputReference {
    return new CenTransitRouterMulticastDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain alibabacloudstack_cen_transit_router_multicast_domain}
*/
export class CenTransitRouterMulticastDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cen_transit_router_multicast_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterMulticastDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterMulticastDomain to import
  * @param importFromId The id of the existing CenTransitRouterMulticastDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterMulticastDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cen_transit_router_multicast_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain alibabacloudstack_cen_transit_router_multicast_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterMulticastDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterMulticastDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cen_transit_router_multicast_domain',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._transitRouterMulticastDomainDescription = config.transitRouterMulticastDomainDescription;
    this._transitRouterMulticastDomainName = config.transitRouterMulticastDomainName;
    this._tags.internalValue = config.tags;
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

  // transit_router_multicast_domain_description - computed: false, optional: true, required: false
  private _transitRouterMulticastDomainDescription?: string; 
  public get transitRouterMulticastDomainDescription() {
    return this.getStringAttribute('transit_router_multicast_domain_description');
  }
  public set transitRouterMulticastDomainDescription(value: string) {
    this._transitRouterMulticastDomainDescription = value;
  }
  public resetTransitRouterMulticastDomainDescription() {
    this._transitRouterMulticastDomainDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterMulticastDomainDescriptionInput() {
    return this._transitRouterMulticastDomainDescription;
  }

  // transit_router_multicast_domain_id - computed: true, optional: false, required: false
  public get transitRouterMulticastDomainId() {
    return this.getStringAttribute('transit_router_multicast_domain_id');
  }

  // transit_router_multicast_domain_name - computed: false, optional: true, required: false
  private _transitRouterMulticastDomainName?: string; 
  public get transitRouterMulticastDomainName() {
    return this.getStringAttribute('transit_router_multicast_domain_name');
  }
  public set transitRouterMulticastDomainName(value: string) {
    this._transitRouterMulticastDomainName = value;
  }
  public resetTransitRouterMulticastDomainName() {
    this._transitRouterMulticastDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterMulticastDomainNameInput() {
    return this._transitRouterMulticastDomainName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CenTransitRouterMulticastDomainTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CenTransitRouterMulticastDomainTags[] | cdktf.IResolvable) {
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
      transit_router_multicast_domain_description: cdktf.stringToTerraform(this._transitRouterMulticastDomainDescription),
      transit_router_multicast_domain_name: cdktf.stringToTerraform(this._transitRouterMulticastDomainName),
      tags: cdktf.listMapper(cenTransitRouterMulticastDomainTagsToTerraform, true)(this._tags.internalValue),
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
      transit_router_multicast_domain_description: {
        value: cdktf.stringToHclTerraform(this._transitRouterMulticastDomainDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_multicast_domain_name: {
        value: cdktf.stringToHclTerraform(this._transitRouterMulticastDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cenTransitRouterMulticastDomainTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CenTransitRouterMulticastDomainTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
