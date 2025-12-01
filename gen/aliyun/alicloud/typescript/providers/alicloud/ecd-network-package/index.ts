// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_network_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcdNetworkPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_network_package#bandwidth EcdNetworkPackage#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_network_package#id EcdNetworkPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_network_package#office_site_id EcdNetworkPackage#office_site_id}
  */
  readonly officeSiteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_network_package alicloud_ecd_network_package}
*/
export class EcdNetworkPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_network_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcdNetworkPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcdNetworkPackage to import
  * @param importFromId The id of the existing EcdNetworkPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_network_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcdNetworkPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_network_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_network_package alicloud_ecd_network_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcdNetworkPackageConfig
  */
  public constructor(scope: Construct, id: string, config: EcdNetworkPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_network_package',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._id = config.id;
    this._officeSiteId = config.officeSiteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
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

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // office_site_id - computed: false, optional: false, required: true
  private _officeSiteId?: string; 
  public get officeSiteId() {
    return this.getStringAttribute('office_site_id');
  }
  public set officeSiteId(value: string) {
    this._officeSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get officeSiteIdInput() {
    return this._officeSiteId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      id: cdktf.stringToTerraform(this._id),
      office_site_id: cdktf.stringToTerraform(this._officeSiteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      office_site_id: {
        value: cdktf.stringToHclTerraform(this._officeSiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
