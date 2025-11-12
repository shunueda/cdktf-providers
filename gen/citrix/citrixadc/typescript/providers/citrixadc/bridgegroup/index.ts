// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/bridgegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/bridgegroup#bridgegroup_id Bridgegroup#bridgegroup_id}
  */
  readonly bridgegroupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/bridgegroup#dynamicrouting Bridgegroup#dynamicrouting}
  */
  readonly dynamicrouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/bridgegroup#id Bridgegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/bridgegroup#ipv6dynamicrouting Bridgegroup#ipv6dynamicrouting}
  */
  readonly ipv6Dynamicrouting?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/bridgegroup citrixadc_bridgegroup}
*/
export class Bridgegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_bridgegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bridgegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bridgegroup to import
  * @param importFromId The id of the existing Bridgegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/bridgegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bridgegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_bridgegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/bridgegroup citrixadc_bridgegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgegroupConfig
  */
  public constructor(scope: Construct, id: string, config: BridgegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_bridgegroup',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bridgegroupId = config.bridgegroupId;
    this._dynamicrouting = config.dynamicrouting;
    this._id = config.id;
    this._ipv6Dynamicrouting = config.ipv6Dynamicrouting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridgegroup_id - computed: false, optional: false, required: true
  private _bridgegroupId?: number; 
  public get bridgegroupId() {
    return this.getNumberAttribute('bridgegroup_id');
  }
  public set bridgegroupId(value: number) {
    this._bridgegroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgegroupIdInput() {
    return this._bridgegroupId;
  }

  // dynamicrouting - computed: true, optional: true, required: false
  private _dynamicrouting?: string; 
  public get dynamicrouting() {
    return this.getStringAttribute('dynamicrouting');
  }
  public set dynamicrouting(value: string) {
    this._dynamicrouting = value;
  }
  public resetDynamicrouting() {
    this._dynamicrouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicroutingInput() {
    return this._dynamicrouting;
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

  // ipv6dynamicrouting - computed: true, optional: true, required: false
  private _ipv6Dynamicrouting?: string; 
  public get ipv6Dynamicrouting() {
    return this.getStringAttribute('ipv6dynamicrouting');
  }
  public set ipv6Dynamicrouting(value: string) {
    this._ipv6Dynamicrouting = value;
  }
  public resetIpv6Dynamicrouting() {
    this._ipv6Dynamicrouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DynamicroutingInput() {
    return this._ipv6Dynamicrouting;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridgegroup_id: cdktf.numberToTerraform(this._bridgegroupId),
      dynamicrouting: cdktf.stringToTerraform(this._dynamicrouting),
      id: cdktf.stringToTerraform(this._id),
      ipv6dynamicrouting: cdktf.stringToTerraform(this._ipv6Dynamicrouting),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridgegroup_id: {
        value: cdktf.numberToHclTerraform(this._bridgegroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamicrouting: {
        value: cdktf.stringToHclTerraform(this._dynamicrouting),
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
      ipv6dynamicrouting: {
        value: cdktf.stringToHclTerraform(this._ipv6Dynamicrouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
