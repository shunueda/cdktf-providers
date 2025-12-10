// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/vpc_traffic_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcTrafficPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/vpc_traffic_package#id VpcTrafficPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Traffic Package Amount, eg: 10,20,50,512,1024,5120,51200,60,300,600,3072,6144,30720,61440,307200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/vpc_traffic_package#traffic_amount VpcTrafficPackage#traffic_amount}
  */
  readonly trafficAmount: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/vpc_traffic_package tencentcloud_vpc_traffic_package}
*/
export class VpcTrafficPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_traffic_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcTrafficPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcTrafficPackage to import
  * @param importFromId The id of the existing VpcTrafficPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/vpc_traffic_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcTrafficPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_traffic_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/vpc_traffic_package tencentcloud_vpc_traffic_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcTrafficPackageConfig
  */
  public constructor(scope: Construct, id: string, config: VpcTrafficPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_traffic_package',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._trafficAmount = config.trafficAmount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // remaining_amount - computed: true, optional: false, required: false
  public get remainingAmount() {
    return this.getNumberAttribute('remaining_amount');
  }

  // traffic_amount - computed: false, optional: false, required: true
  private _trafficAmount?: number; 
  public get trafficAmount() {
    return this.getNumberAttribute('traffic_amount');
  }
  public set trafficAmount(value: number) {
    this._trafficAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficAmountInput() {
    return this._trafficAmount;
  }

  // used_amount - computed: true, optional: false, required: false
  public get usedAmount() {
    return this.getNumberAttribute('used_amount');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      traffic_amount: cdktf.numberToTerraform(this._trafficAmount),
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
      traffic_amount: {
        value: cdktf.numberToHclTerraform(this._trafficAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
