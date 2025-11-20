// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdnPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your business entity name. The entity name to be used on the Letter of Authorization (LOA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port#business_entity_name SdnPort#business_entity_name}
  */
  readonly businessEntityName: string;
  /**
  * ID of data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port#datacenter SdnPort#datacenter}
  */
  readonly datacenter: string;
  /**
  * Indicate whether to force delete the port. Default is `false`. If set true, the port will be permanently deleted instead of being moved into the recycle bin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port#force_delete SdnPort#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port#id SdnPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port name. Up to 255 characters in length are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port#name SdnPort#name}
  */
  readonly name?: string;
  /**
  * Type of port. eg. 1G/10G/40G.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port#port_type SdnPort#port_type}
  */
  readonly portType: string;
  /**
  * Description of port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port#remarks SdnPort#remarks}
  */
  readonly remarks?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port zenlayercloud_sdn_port}
*/
export class SdnPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_sdn_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdnPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdnPort to import
  * @param importFromId The id of the existing SdnPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdnPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_sdn_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_port zenlayercloud_sdn_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdnPortConfig
  */
  public constructor(scope: Construct, id: string, config: SdnPortConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_sdn_port',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.9',
        providerVersionConstraint: '0.2.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._businessEntityName = config.businessEntityName;
    this._datacenter = config.datacenter;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._name = config.name;
    this._portType = config.portType;
    this._remarks = config.remarks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_entity_name - computed: false, optional: false, required: true
  private _businessEntityName?: string; 
  public get businessEntityName() {
    return this.getStringAttribute('business_entity_name');
  }
  public set businessEntityName(value: string) {
    this._businessEntityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessEntityNameInput() {
    return this._businessEntityName;
  }

  // connect_status - computed: true, optional: false, required: false
  public get connectStatus() {
    return this.getStringAttribute('connect_status');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datacenter_name - computed: true, optional: false, required: false
  public get datacenterName() {
    return this.getStringAttribute('datacenter_name');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // loa_status - computed: true, optional: false, required: false
  public get loaStatus() {
    return this.getStringAttribute('loa_status');
  }

  // loa_url - computed: true, optional: false, required: false
  public get loaUrl() {
    return this.getStringAttribute('loa_url');
  }

  // name - computed: false, optional: true, required: false
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

  // port_charge_type - computed: true, optional: false, required: false
  public get portChargeType() {
    return this.getStringAttribute('port_charge_type');
  }

  // port_status - computed: true, optional: false, required: false
  public get portStatus() {
    return this.getStringAttribute('port_status');
  }

  // port_type - computed: false, optional: false, required: true
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // remarks - computed: false, optional: true, required: false
  private _remarks?: string; 
  public get remarks() {
    return this.getStringAttribute('remarks');
  }
  public set remarks(value: string) {
    this._remarks = value;
  }
  public resetRemarks() {
    this._remarks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarksInput() {
    return this._remarks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_entity_name: cdktf.stringToTerraform(this._businessEntityName),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port_type: cdktf.stringToTerraform(this._portType),
      remarks: cdktf.stringToTerraform(this._remarks),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_entity_name: {
        value: cdktf.stringToHclTerraform(this._businessEntityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      port_type: {
        value: cdktf.stringToHclTerraform(this._portType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remarks: {
        value: cdktf.stringToHclTerraform(this._remarks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
