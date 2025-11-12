// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterMulticastDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#id CenTransitRouterMulticastDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#tags CenTransitRouterMulticastDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#transit_router_id CenTransitRouterMulticastDomain#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#transit_router_multicast_domain_description CenTransitRouterMulticastDomain#transit_router_multicast_domain_description}
  */
  readonly transitRouterMulticastDomainDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#transit_router_multicast_domain_name CenTransitRouterMulticastDomain#transit_router_multicast_domain_name}
  */
  readonly transitRouterMulticastDomainName?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#options CenTransitRouterMulticastDomain#options}
  */
  readonly options?: CenTransitRouterMulticastDomainOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#timeouts CenTransitRouterMulticastDomain#timeouts}
  */
  readonly timeouts?: CenTransitRouterMulticastDomainTimeouts;
}
export interface CenTransitRouterMulticastDomainOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#igmpv2_support CenTransitRouterMulticastDomain#igmpv2_support}
  */
  readonly igmpv2Support?: string;
}

export function cenTransitRouterMulticastDomainOptionsToTerraform(struct?: CenTransitRouterMulticastDomainOptionsOutputReference | CenTransitRouterMulticastDomainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    igmpv2_support: cdktf.stringToTerraform(struct!.igmpv2Support),
  }
}


export function cenTransitRouterMulticastDomainOptionsToHclTerraform(struct?: CenTransitRouterMulticastDomainOptionsOutputReference | CenTransitRouterMulticastDomainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    igmpv2_support: {
      value: cdktf.stringToHclTerraform(struct!.igmpv2Support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CenTransitRouterMulticastDomainOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CenTransitRouterMulticastDomainOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._igmpv2Support !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpv2Support = this._igmpv2Support;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CenTransitRouterMulticastDomainOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._igmpv2Support = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._igmpv2Support = value.igmpv2Support;
    }
  }

  // igmpv2_support - computed: true, optional: true, required: false
  private _igmpv2Support?: string; 
  public get igmpv2Support() {
    return this.getStringAttribute('igmpv2_support');
  }
  public set igmpv2Support(value: string) {
    this._igmpv2Support = value;
  }
  public resetIgmpv2Support() {
    this._igmpv2Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpv2SupportInput() {
    return this._igmpv2Support;
  }
}
export interface CenTransitRouterMulticastDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#create CenTransitRouterMulticastDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#delete CenTransitRouterMulticastDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#update CenTransitRouterMulticastDomain#update}
  */
  readonly update?: string;
}

export function cenTransitRouterMulticastDomainTimeoutsToTerraform(struct?: CenTransitRouterMulticastDomainTimeouts | cdktf.IResolvable): any {
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


export function cenTransitRouterMulticastDomainTimeoutsToHclTerraform(struct?: CenTransitRouterMulticastDomainTimeouts | cdktf.IResolvable): any {
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

export class CenTransitRouterMulticastDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenTransitRouterMulticastDomainTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CenTransitRouterMulticastDomainTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain alicloud_cen_transit_router_multicast_domain}
*/
export class CenTransitRouterMulticastDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_transit_router_multicast_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterMulticastDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterMulticastDomain to import
  * @param importFromId The id of the existing CenTransitRouterMulticastDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterMulticastDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_transit_router_multicast_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cen_transit_router_multicast_domain alicloud_cen_transit_router_multicast_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterMulticastDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterMulticastDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_transit_router_multicast_domain',
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
    this._id = config.id;
    this._tags = config.tags;
    this._transitRouterId = config.transitRouterId;
    this._transitRouterMulticastDomainDescription = config.transitRouterMulticastDomainDescription;
    this._transitRouterMulticastDomainName = config.transitRouterMulticastDomainName;
    this._options.internalValue = config.options;
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
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

  // options - computed: false, optional: true, required: false
  private _options = new CenTransitRouterMulticastDomainOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: CenTransitRouterMulticastDomainOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenTransitRouterMulticastDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenTransitRouterMulticastDomainTimeouts) {
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      transit_router_multicast_domain_description: cdktf.stringToTerraform(this._transitRouterMulticastDomainDescription),
      transit_router_multicast_domain_name: cdktf.stringToTerraform(this._transitRouterMulticastDomainName),
      options: cenTransitRouterMulticastDomainOptionsToTerraform(this._options.internalValue),
      timeouts: cenTransitRouterMulticastDomainTimeoutsToTerraform(this._timeouts.internalValue),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      options: {
        value: cenTransitRouterMulticastDomainOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CenTransitRouterMulticastDomainOptionsList",
      },
      timeouts: {
        value: cenTransitRouterMulticastDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenTransitRouterMulticastDomainTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
