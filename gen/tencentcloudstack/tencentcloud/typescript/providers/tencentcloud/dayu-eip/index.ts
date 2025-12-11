// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuEipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource id to bind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip#bind_resource_id DayuEip#bind_resource_id}
  */
  readonly bindResourceId: string;
  /**
  * Resource region to bind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip#bind_resource_region DayuEip#bind_resource_region}
  */
  readonly bindResourceRegion: string;
  /**
  * Resource type to bind, value range [`clb`, `cvm`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip#bind_resource_type DayuEip#bind_resource_type}
  */
  readonly bindResourceType: string;
  /**
  * Eip of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip#eip DayuEip#eip}
  */
  readonly eip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip#id DayuEip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip#resource_id DayuEip#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip tencentcloud_dayu_eip}
*/
export class DayuEip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_eip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuEip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuEip to import
  * @param importFromId The id of the existing DayuEip that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuEip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_eip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_eip tencentcloud_dayu_eip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuEipConfig
  */
  public constructor(scope: Construct, id: string, config: DayuEipConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_eip',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindResourceId = config.bindResourceId;
    this._bindResourceRegion = config.bindResourceRegion;
    this._bindResourceType = config.bindResourceType;
    this._eip = config.eip;
    this._id = config.id;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_resource_id - computed: false, optional: false, required: true
  private _bindResourceId?: string; 
  public get bindResourceId() {
    return this.getStringAttribute('bind_resource_id');
  }
  public set bindResourceId(value: string) {
    this._bindResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindResourceIdInput() {
    return this._bindResourceId;
  }

  // bind_resource_region - computed: false, optional: false, required: true
  private _bindResourceRegion?: string; 
  public get bindResourceRegion() {
    return this.getStringAttribute('bind_resource_region');
  }
  public set bindResourceRegion(value: string) {
    this._bindResourceRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindResourceRegionInput() {
    return this._bindResourceRegion;
  }

  // bind_resource_type - computed: false, optional: false, required: true
  private _bindResourceType?: string; 
  public get bindResourceType() {
    return this.getStringAttribute('bind_resource_type');
  }
  public set bindResourceType(value: string) {
    this._bindResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindResourceTypeInput() {
    return this._bindResourceType;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // eip - computed: false, optional: false, required: true
  private _eip?: string; 
  public get eip() {
    return this.getStringAttribute('eip');
  }
  public set eip(value: string) {
    this._eip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip;
  }

  // eip_address_status - computed: true, optional: false, required: false
  public get eipAddressStatus() {
    return this.getStringAttribute('eip_address_status');
  }

  // eip_bound_rsc_eni - computed: true, optional: false, required: false
  public get eipBoundRscEni() {
    return this.getStringAttribute('eip_bound_rsc_eni');
  }

  // eip_bound_rsc_ins - computed: true, optional: false, required: false
  public get eipBoundRscIns() {
    return this.getStringAttribute('eip_bound_rsc_ins');
  }

  // eip_bound_rsc_vip - computed: true, optional: false, required: false
  public get eipBoundRscVip() {
    return this.getStringAttribute('eip_bound_rsc_vip');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
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

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // protection_status - computed: true, optional: false, required: false
  public get protectionStatus() {
    return this.getStringAttribute('protection_status');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bind_resource_id: cdktf.stringToTerraform(this._bindResourceId),
      bind_resource_region: cdktf.stringToTerraform(this._bindResourceRegion),
      bind_resource_type: cdktf.stringToTerraform(this._bindResourceType),
      eip: cdktf.stringToTerraform(this._eip),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bind_resource_id: {
        value: cdktf.stringToHclTerraform(this._bindResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_resource_region: {
        value: cdktf.stringToHclTerraform(this._bindResourceRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_resource_type: {
        value: cdktf.stringToHclTerraform(this._bindResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip: {
        value: cdktf.stringToHclTerraform(this._eip),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
