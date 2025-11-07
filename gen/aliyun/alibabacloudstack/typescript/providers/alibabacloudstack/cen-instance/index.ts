// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#cen_instance_name CenInstance#cen_instance_name}
  */
  readonly cenInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#description CenInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#id CenInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#protection_level CenInstance#protection_level}
  */
  readonly protectionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#tags CenInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#transit_router_description CenInstance#transit_router_description}
  */
  readonly transitRouterDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#transit_router_name CenInstance#transit_router_name}
  */
  readonly transitRouterName?: string;
  /**
  * transit_router_cidrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#transit_router_cidrs CenInstance#transit_router_cidrs}
  */
  readonly transitRouterCidrs?: CenInstanceTransitRouterCidrs[] | cdktf.IResolvable;
}
export interface CenInstanceTransitRouterCidrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#cidr CenInstance#cidr}
  */
  readonly cidr: string;
}

export function cenInstanceTransitRouterCidrsToTerraform(struct?: CenInstanceTransitRouterCidrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}


export function cenInstanceTransitRouterCidrsToHclTerraform(struct?: CenInstanceTransitRouterCidrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CenInstanceTransitRouterCidrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CenInstanceTransitRouterCidrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CenInstanceTransitRouterCidrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_id - computed: true, optional: false, required: false
  public get cidrId() {
    return this.getStringAttribute('cidr_id');
  }
}

export class CenInstanceTransitRouterCidrsList extends cdktf.ComplexList {
  public internalValue? : CenInstanceTransitRouterCidrs[] | cdktf.IResolvable

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
  public get(index: number): CenInstanceTransitRouterCidrsOutputReference {
    return new CenInstanceTransitRouterCidrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance alibabacloudstack_cen_instance}
*/
export class CenInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cen_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenInstance to import
  * @param importFromId The id of the existing CenInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cen_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/cen_instance alibabacloudstack_cen_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CenInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cen_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cenInstanceName = config.cenInstanceName;
    this._description = config.description;
    this._id = config.id;
    this._protectionLevel = config.protectionLevel;
    this._tags = config.tags;
    this._transitRouterDescription = config.transitRouterDescription;
    this._transitRouterName = config.transitRouterName;
    this._transitRouterCidrs.internalValue = config.transitRouterCidrs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_bandwidth_package_ids - computed: true, optional: false, required: false
  public get cenBandwidthPackageIds() {
    return this.getListAttribute('cen_bandwidth_package_ids');
  }

  // cen_id - computed: true, optional: false, required: false
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }

  // cen_instance_name - computed: false, optional: true, required: false
  private _cenInstanceName?: string; 
  public get cenInstanceName() {
    return this.getStringAttribute('cen_instance_name');
  }
  public set cenInstanceName(value: string) {
    this._cenInstanceName = value;
  }
  public resetCenInstanceName() {
    this._cenInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenInstanceNameInput() {
    return this._cenInstanceName;
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

  // protection_level - computed: false, optional: true, required: false
  private _protectionLevel?: string; 
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
  public set protectionLevel(value: string) {
    this._protectionLevel = value;
  }
  public resetProtectionLevel() {
    this._protectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelInput() {
    return this._protectionLevel;
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

  // transit_router_description - computed: false, optional: true, required: false
  private _transitRouterDescription?: string; 
  public get transitRouterDescription() {
    return this.getStringAttribute('transit_router_description');
  }
  public set transitRouterDescription(value: string) {
    this._transitRouterDescription = value;
  }
  public resetTransitRouterDescription() {
    this._transitRouterDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterDescriptionInput() {
    return this._transitRouterDescription;
  }

  // transit_router_id - computed: true, optional: false, required: false
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }

  // transit_router_name - computed: false, optional: true, required: false
  private _transitRouterName?: string; 
  public get transitRouterName() {
    return this.getStringAttribute('transit_router_name');
  }
  public set transitRouterName(value: string) {
    this._transitRouterName = value;
  }
  public resetTransitRouterName() {
    this._transitRouterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterNameInput() {
    return this._transitRouterName;
  }

  // transit_router_cidrs - computed: false, optional: true, required: false
  private _transitRouterCidrs = new CenInstanceTransitRouterCidrsList(this, "transit_router_cidrs", true);
  public get transitRouterCidrs() {
    return this._transitRouterCidrs;
  }
  public putTransitRouterCidrs(value: CenInstanceTransitRouterCidrs[] | cdktf.IResolvable) {
    this._transitRouterCidrs.internalValue = value;
  }
  public resetTransitRouterCidrs() {
    this._transitRouterCidrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterCidrsInput() {
    return this._transitRouterCidrs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cen_instance_name: cdktf.stringToTerraform(this._cenInstanceName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      protection_level: cdktf.stringToTerraform(this._protectionLevel),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_router_description: cdktf.stringToTerraform(this._transitRouterDescription),
      transit_router_name: cdktf.stringToTerraform(this._transitRouterName),
      transit_router_cidrs: cdktf.listMapper(cenInstanceTransitRouterCidrsToTerraform, true)(this._transitRouterCidrs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_instance_name: {
        value: cdktf.stringToHclTerraform(this._cenInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      protection_level: {
        value: cdktf.stringToHclTerraform(this._protectionLevel),
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
      transit_router_description: {
        value: cdktf.stringToHclTerraform(this._transitRouterDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_name: {
        value: cdktf.stringToHclTerraform(this._transitRouterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_cidrs: {
        value: cdktf.listMapperHcl(cenInstanceTransitRouterCidrsToHclTerraform, true)(this._transitRouterCidrs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CenInstanceTransitRouterCidrsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
