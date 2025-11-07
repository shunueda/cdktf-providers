// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcHaVipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#associated_instance_type VpcHaVip#associated_instance_type}
  */
  readonly associatedInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#associated_instances VpcHaVip#associated_instances}
  */
  readonly associatedInstances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#description VpcHaVip#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#ha_vip_name VpcHaVip#ha_vip_name}
  */
  readonly haVipName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#id VpcHaVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#ip_address VpcHaVip#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#tags VpcHaVip#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#vpc_id VpcHaVip#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#vswitch_id VpcHaVip#vswitch_id}
  */
  readonly vswitchId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip alibabacloudstack_vpc_ha_vip}
*/
export class VpcHaVip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpc_ha_vip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcHaVip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcHaVip to import
  * @param importFromId The id of the existing VpcHaVip that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcHaVip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpc_ha_vip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpc_ha_vip alibabacloudstack_vpc_ha_vip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcHaVipConfig
  */
  public constructor(scope: Construct, id: string, config: VpcHaVipConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpc_ha_vip',
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
    this._associatedInstanceType = config.associatedInstanceType;
    this._associatedInstances = config.associatedInstances;
    this._description = config.description;
    this._haVipName = config.haVipName;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_eip_addresses - computed: true, optional: false, required: false
  public get associatedEipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_eip_addresses'));
  }

  // associated_instance_type - computed: false, optional: true, required: false
  private _associatedInstanceType?: string; 
  public get associatedInstanceType() {
    return this.getStringAttribute('associated_instance_type');
  }
  public set associatedInstanceType(value: string) {
    this._associatedInstanceType = value;
  }
  public resetAssociatedInstanceType() {
    this._associatedInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInstanceTypeInput() {
    return this._associatedInstanceType;
  }

  // associated_instances - computed: true, optional: true, required: false
  private _associatedInstances?: string[]; 
  public get associatedInstances() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_instances'));
  }
  public set associatedInstances(value: string[]) {
    this._associatedInstances = value;
  }
  public resetAssociatedInstances() {
    this._associatedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInstancesInput() {
    return this._associatedInstances;
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

  // ha_vip_id - computed: true, optional: false, required: false
  public get haVipId() {
    return this.getStringAttribute('ha_vip_id');
  }

  // ha_vip_name - computed: false, optional: true, required: false
  private _haVipName?: string; 
  public get haVipName() {
    return this.getStringAttribute('ha_vip_name');
  }
  public set haVipName(value: string) {
    this._haVipName = value;
  }
  public resetHaVipName() {
    this._haVipName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVipNameInput() {
    return this._haVipName;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_instance_type: cdktf.stringToTerraform(this._associatedInstanceType),
      associated_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedInstances),
      description: cdktf.stringToTerraform(this._description),
      ha_vip_name: cdktf.stringToTerraform(this._haVipName),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_instance_type: {
        value: cdktf.stringToHclTerraform(this._associatedInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associatedInstances),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_vip_name: {
        value: cdktf.stringToHclTerraform(this._haVipName),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
