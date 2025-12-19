// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_scaleout_nat_ip_hashing_scheme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6ScaleoutNatIpHashingSchemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'route-aggregation': Chunk contiguous NAT IPs for route aggregation(default); 'mod-user-groups': Hash NAT IPs by taking mod of user-groups;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_scaleout_nat_ip_hashing_scheme#hashing_type Cgnv6ScaleoutNatIpHashingScheme#hashing_type}
  */
  readonly hashingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_scaleout_nat_ip_hashing_scheme#id Cgnv6ScaleoutNatIpHashingScheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_scaleout_nat_ip_hashing_scheme#uuid Cgnv6ScaleoutNatIpHashingScheme#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_scaleout_nat_ip_hashing_scheme thunder_cgnv6_scaleout_nat_ip_hashing_scheme}
*/
export class Cgnv6ScaleoutNatIpHashingScheme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_scaleout_nat_ip_hashing_scheme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6ScaleoutNatIpHashingScheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6ScaleoutNatIpHashingScheme to import
  * @param importFromId The id of the existing Cgnv6ScaleoutNatIpHashingScheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_scaleout_nat_ip_hashing_scheme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6ScaleoutNatIpHashingScheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_scaleout_nat_ip_hashing_scheme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_scaleout_nat_ip_hashing_scheme thunder_cgnv6_scaleout_nat_ip_hashing_scheme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6ScaleoutNatIpHashingSchemeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6ScaleoutNatIpHashingSchemeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_scaleout_nat_ip_hashing_scheme',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hashingType = config.hashingType;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hashing_type - computed: false, optional: true, required: false
  private _hashingType?: string; 
  public get hashingType() {
    return this.getStringAttribute('hashing_type');
  }
  public set hashingType(value: string) {
    this._hashingType = value;
  }
  public resetHashingType() {
    this._hashingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingTypeInput() {
    return this._hashingType;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hashing_type: cdktf.stringToTerraform(this._hashingType),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hashing_type: {
        value: cdktf.stringToHclTerraform(this._hashingType),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
