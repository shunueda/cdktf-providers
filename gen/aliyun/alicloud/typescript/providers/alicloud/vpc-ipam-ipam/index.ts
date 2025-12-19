// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamIpamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#id VpcIpamIpam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#ipam_description VpcIpamIpam#ipam_description}
  */
  readonly ipamDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#ipam_name VpcIpamIpam#ipam_name}
  */
  readonly ipamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#operating_region_list VpcIpamIpam#operating_region_list}
  */
  readonly operatingRegionList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#resource_group_id VpcIpamIpam#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#tags VpcIpamIpam#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#timeouts VpcIpamIpam#timeouts}
  */
  readonly timeouts?: VpcIpamIpamTimeouts;
}
export interface VpcIpamIpamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#create VpcIpamIpam#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#delete VpcIpamIpam#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#update VpcIpamIpam#update}
  */
  readonly update?: string;
}

export function vpcIpamIpamTimeoutsToTerraform(struct?: VpcIpamIpamTimeouts | cdktf.IResolvable): any {
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


export function vpcIpamIpamTimeoutsToHclTerraform(struct?: VpcIpamIpamTimeouts | cdktf.IResolvable): any {
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

export class VpcIpamIpamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcIpamIpamTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcIpamIpamTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam alicloud_vpc_ipam_ipam}
*/
export class VpcIpamIpam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_ipam_ipam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpamIpam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpamIpam to import
  * @param importFromId The id of the existing VpcIpamIpam that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpamIpam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_ipam_ipam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_ipam_ipam alicloud_vpc_ipam_ipam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamIpamConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamIpamConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_ipam_ipam',
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
    this._id = config.id;
    this._ipamDescription = config.ipamDescription;
    this._ipamName = config.ipamName;
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

  // ipam_description - computed: false, optional: true, required: false
  private _ipamDescription?: string; 
  public get ipamDescription() {
    return this.getStringAttribute('ipam_description');
  }
  public set ipamDescription(value: string) {
    this._ipamDescription = value;
  }
  public resetIpamDescription() {
    this._ipamDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamDescriptionInput() {
    return this._ipamDescription;
  }

  // ipam_name - computed: false, optional: true, required: false
  private _ipamName?: string; 
  public get ipamName() {
    return this.getStringAttribute('ipam_name');
  }
  public set ipamName(value: string) {
    this._ipamName = value;
  }
  public resetIpamName() {
    this._ipamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamNameInput() {
    return this._ipamName;
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

  // private_default_scope_id - computed: true, optional: false, required: false
  public get privateDefaultScopeId() {
    return this.getStringAttribute('private_default_scope_id');
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
  private _timeouts = new VpcIpamIpamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcIpamIpamTimeouts) {
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
      ipam_description: cdktf.stringToTerraform(this._ipamDescription),
      ipam_name: cdktf.stringToTerraform(this._ipamName),
      operating_region_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operatingRegionList),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: vpcIpamIpamTimeoutsToTerraform(this._timeouts.internalValue),
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
      ipam_description: {
        value: cdktf.stringToHclTerraform(this._ipamDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_name: {
        value: cdktf.stringToHclTerraform(this._ipamName),
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
        value: vpcIpamIpamTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcIpamIpamTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
