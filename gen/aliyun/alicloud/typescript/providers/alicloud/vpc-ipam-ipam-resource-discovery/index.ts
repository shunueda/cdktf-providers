// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamIpamResourceDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#id VpcIpamIpamResourceDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#ipam_resource_discovery_description VpcIpamIpamResourceDiscovery#ipam_resource_discovery_description}
  */
  readonly ipamResourceDiscoveryDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#ipam_resource_discovery_name VpcIpamIpamResourceDiscovery#ipam_resource_discovery_name}
  */
  readonly ipamResourceDiscoveryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#operating_region_list VpcIpamIpamResourceDiscovery#operating_region_list}
  */
  readonly operatingRegionList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#resource_group_id VpcIpamIpamResourceDiscovery#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#tags VpcIpamIpamResourceDiscovery#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#timeouts VpcIpamIpamResourceDiscovery#timeouts}
  */
  readonly timeouts?: VpcIpamIpamResourceDiscoveryTimeouts;
}
export interface VpcIpamIpamResourceDiscoveryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#create VpcIpamIpamResourceDiscovery#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#delete VpcIpamIpamResourceDiscovery#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#update VpcIpamIpamResourceDiscovery#update}
  */
  readonly update?: string;
}

export function vpcIpamIpamResourceDiscoveryTimeoutsToTerraform(struct?: VpcIpamIpamResourceDiscoveryTimeouts | cdktf.IResolvable): any {
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


export function vpcIpamIpamResourceDiscoveryTimeoutsToHclTerraform(struct?: VpcIpamIpamResourceDiscoveryTimeouts | cdktf.IResolvable): any {
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

export class VpcIpamIpamResourceDiscoveryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcIpamIpamResourceDiscoveryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcIpamIpamResourceDiscoveryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery alicloud_vpc_ipam_ipam_resource_discovery}
*/
export class VpcIpamIpamResourceDiscovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_ipam_ipam_resource_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpamIpamResourceDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpamIpamResourceDiscovery to import
  * @param importFromId The id of the existing VpcIpamIpamResourceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpamIpamResourceDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_ipam_ipam_resource_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_resource_discovery alicloud_vpc_ipam_ipam_resource_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamIpamResourceDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamIpamResourceDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_ipam_ipam_resource_discovery',
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
    this._ipamResourceDiscoveryDescription = config.ipamResourceDiscoveryDescription;
    this._ipamResourceDiscoveryName = config.ipamResourceDiscoveryName;
    this._operatingRegionList = config.operatingRegionList;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
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

  // ipam_resource_discovery_description - computed: false, optional: true, required: false
  private _ipamResourceDiscoveryDescription?: string; 
  public get ipamResourceDiscoveryDescription() {
    return this.getStringAttribute('ipam_resource_discovery_description');
  }
  public set ipamResourceDiscoveryDescription(value: string) {
    this._ipamResourceDiscoveryDescription = value;
  }
  public resetIpamResourceDiscoveryDescription() {
    this._ipamResourceDiscoveryDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamResourceDiscoveryDescriptionInput() {
    return this._ipamResourceDiscoveryDescription;
  }

  // ipam_resource_discovery_name - computed: false, optional: true, required: false
  private _ipamResourceDiscoveryName?: string; 
  public get ipamResourceDiscoveryName() {
    return this.getStringAttribute('ipam_resource_discovery_name');
  }
  public set ipamResourceDiscoveryName(value: string) {
    this._ipamResourceDiscoveryName = value;
  }
  public resetIpamResourceDiscoveryName() {
    this._ipamResourceDiscoveryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamResourceDiscoveryNameInput() {
    return this._ipamResourceDiscoveryName;
  }

  // operating_region_list - computed: false, optional: false, required: true
  private _operatingRegionList?: string[]; 
  public get operatingRegionList() {
    return cdktf.Fn.tolist(this.getListAttribute('operating_region_list'));
  }
  public set operatingRegionList(value: string[]) {
    this._operatingRegionList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingRegionListInput() {
    return this._operatingRegionList;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcIpamIpamResourceDiscoveryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcIpamIpamResourceDiscoveryTimeouts) {
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
      ipam_resource_discovery_description: cdktf.stringToTerraform(this._ipamResourceDiscoveryDescription),
      ipam_resource_discovery_name: cdktf.stringToTerraform(this._ipamResourceDiscoveryName),
      operating_region_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operatingRegionList),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: vpcIpamIpamResourceDiscoveryTimeoutsToTerraform(this._timeouts.internalValue),
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
      ipam_resource_discovery_description: {
        value: cdktf.stringToHclTerraform(this._ipamResourceDiscoveryDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_resource_discovery_name: {
        value: cdktf.stringToHclTerraform(this._ipamResourceDiscoveryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_region_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operatingRegionList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      timeouts: {
        value: vpcIpamIpamResourceDiscoveryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcIpamIpamResourceDiscoveryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
