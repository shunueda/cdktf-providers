// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpSpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum number of subnets that can be allocated from internal scope in this IP Space. ('-1' for unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#default_quota_max_cidr_count IpSpace#default_quota_max_cidr_count}
  */
  readonly defaultQuotaMaxCidrCount: string;
  /**
  * Maximum number of single floating IP addresses that can be allocated from internal scope in this IP Space. ('-1' for unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#default_quota_max_ip_count IpSpace#default_quota_max_ip_count}
  */
  readonly defaultQuotaMaxIpCount: string;
  /**
  * Maximum subnet size represented as a prefix length (e.g. 24, 28) in IP Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#default_quota_max_subnet_size IpSpace#default_quota_max_subnet_size}
  */
  readonly defaultQuotaMaxSubnetSize: string;
  /**
  * Description of IP Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#description IpSpace#description}
  */
  readonly description?: string;
  /**
  * External scope in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#external_scope IpSpace#external_scope}
  */
  readonly externalScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#id IpSpace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of IP Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#name IpSpace#name}
  */
  readonly name: string;
  /**
  * Region ID for this IP Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#region_id IpSpace#region_id}
  */
  readonly regionId: string;
  /**
  * internal_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#internal_scope IpSpace#internal_scope}
  */
  readonly internalScope: IpSpaceInternalScope[] | cdktf.IResolvable;
}
export interface IpSpaceInternalScope {
  /**
  * The CIDR that represents this IP block within IP Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#cidr IpSpace#cidr}
  */
  readonly cidr: string;
  /**
  * Name of internal scope within IP Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#name IpSpace#name}
  */
  readonly name?: string;
}

export function ipSpaceInternalScopeToTerraform(struct?: IpSpaceInternalScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipSpaceInternalScopeToHclTerraform(struct?: IpSpaceInternalScope | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpSpaceInternalScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpSpaceInternalScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpSpaceInternalScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._name = value.name;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class IpSpaceInternalScopeList extends cdktf.ComplexList {
  public internalValue? : IpSpaceInternalScope[] | cdktf.IResolvable

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
  public get(index: number): IpSpaceInternalScopeOutputReference {
    return new IpSpaceInternalScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space vcfa_ip_space}
*/
export class IpSpace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_ip_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpSpace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpSpace to import
  * @param importFromId The id of the existing IpSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpSpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_ip_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/ip_space vcfa_ip_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpSpaceConfig
  */
  public constructor(scope: Construct, id: string, config: IpSpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_ip_space',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultQuotaMaxCidrCount = config.defaultQuotaMaxCidrCount;
    this._defaultQuotaMaxIpCount = config.defaultQuotaMaxIpCount;
    this._defaultQuotaMaxSubnetSize = config.defaultQuotaMaxSubnetSize;
    this._description = config.description;
    this._externalScope = config.externalScope;
    this._id = config.id;
    this._name = config.name;
    this._regionId = config.regionId;
    this._internalScope.internalValue = config.internalScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_quota_max_cidr_count - computed: false, optional: false, required: true
  private _defaultQuotaMaxCidrCount?: string; 
  public get defaultQuotaMaxCidrCount() {
    return this.getStringAttribute('default_quota_max_cidr_count');
  }
  public set defaultQuotaMaxCidrCount(value: string) {
    this._defaultQuotaMaxCidrCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQuotaMaxCidrCountInput() {
    return this._defaultQuotaMaxCidrCount;
  }

  // default_quota_max_ip_count - computed: false, optional: false, required: true
  private _defaultQuotaMaxIpCount?: string; 
  public get defaultQuotaMaxIpCount() {
    return this.getStringAttribute('default_quota_max_ip_count');
  }
  public set defaultQuotaMaxIpCount(value: string) {
    this._defaultQuotaMaxIpCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQuotaMaxIpCountInput() {
    return this._defaultQuotaMaxIpCount;
  }

  // default_quota_max_subnet_size - computed: false, optional: false, required: true
  private _defaultQuotaMaxSubnetSize?: string; 
  public get defaultQuotaMaxSubnetSize() {
    return this.getStringAttribute('default_quota_max_subnet_size');
  }
  public set defaultQuotaMaxSubnetSize(value: string) {
    this._defaultQuotaMaxSubnetSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQuotaMaxSubnetSizeInput() {
    return this._defaultQuotaMaxSubnetSize;
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

  // external_scope - computed: false, optional: true, required: false
  private _externalScope?: string; 
  public get externalScope() {
    return this.getStringAttribute('external_scope');
  }
  public set externalScope(value: string) {
    this._externalScope = value;
  }
  public resetExternalScope() {
    this._externalScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalScopeInput() {
    return this._externalScope;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // internal_scope - computed: false, optional: false, required: true
  private _internalScope = new IpSpaceInternalScopeList(this, "internal_scope", true);
  public get internalScope() {
    return this._internalScope;
  }
  public putInternalScope(value: IpSpaceInternalScope[] | cdktf.IResolvable) {
    this._internalScope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalScopeInput() {
    return this._internalScope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_quota_max_cidr_count: cdktf.stringToTerraform(this._defaultQuotaMaxCidrCount),
      default_quota_max_ip_count: cdktf.stringToTerraform(this._defaultQuotaMaxIpCount),
      default_quota_max_subnet_size: cdktf.stringToTerraform(this._defaultQuotaMaxSubnetSize),
      description: cdktf.stringToTerraform(this._description),
      external_scope: cdktf.stringToTerraform(this._externalScope),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region_id: cdktf.stringToTerraform(this._regionId),
      internal_scope: cdktf.listMapper(ipSpaceInternalScopeToTerraform, true)(this._internalScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_quota_max_cidr_count: {
        value: cdktf.stringToHclTerraform(this._defaultQuotaMaxCidrCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_quota_max_ip_count: {
        value: cdktf.stringToHclTerraform(this._defaultQuotaMaxIpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_quota_max_subnet_size: {
        value: cdktf.stringToHclTerraform(this._defaultQuotaMaxSubnetSize),
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
      external_scope: {
        value: cdktf.stringToHclTerraform(this._externalScope),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_scope: {
        value: cdktf.listMapperHcl(ipSpaceInternalScopeToHclTerraform, true)(this._internalScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpSpaceInternalScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
