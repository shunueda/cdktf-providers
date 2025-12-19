// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_fragmentation_inbound
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6DsLiteFragmentationInboundConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure number of ICMP messages sent when DF set. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_fragmentation_inbound#count1 Cgnv6DsLiteFragmentationInbound#count1}
  */
  readonly count1?: number;
  /**
  * 'drop': Drop Silently; 'ipv4': Use IPv4 Fragmentation; 'ipv6': Use IPv6 fragmentation for oversize packets; 'send-icmp': Send ICMP Type 3 Code 4 (Fragmentation Needed and DF Set) (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_fragmentation_inbound#df_set Cgnv6DsLiteFragmentationInbound#df_set}
  */
  readonly dfSet?: string;
  /**
  * 'drop': Drop Silently; 'ipv4': Use IPv4 fragmentation for oversize packets; 'ipv6': Use IPv6 fragmentation for oversize packets (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_fragmentation_inbound#frag_action Cgnv6DsLiteFragmentationInbound#frag_action}
  */
  readonly fragAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_fragmentation_inbound#id Cgnv6DsLiteFragmentationInbound#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_fragmentation_inbound#uuid Cgnv6DsLiteFragmentationInbound#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_fragmentation_inbound thunder_cgnv6_ds_lite_fragmentation_inbound}
*/
export class Cgnv6DsLiteFragmentationInbound extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ds_lite_fragmentation_inbound";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6DsLiteFragmentationInbound resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6DsLiteFragmentationInbound to import
  * @param importFromId The id of the existing Cgnv6DsLiteFragmentationInbound that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_fragmentation_inbound#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6DsLiteFragmentationInbound to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ds_lite_fragmentation_inbound", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_fragmentation_inbound thunder_cgnv6_ds_lite_fragmentation_inbound} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6DsLiteFragmentationInboundConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6DsLiteFragmentationInboundConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ds_lite_fragmentation_inbound',
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
    this._count1 = config.count1;
    this._dfSet = config.dfSet;
    this._fragAction = config.fragAction;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // count1 - computed: false, optional: true, required: false
  private _count1?: number; 
  public get count1() {
    return this.getNumberAttribute('count1');
  }
  public set count1(value: number) {
    this._count1 = value;
  }
  public resetCount1() {
    this._count1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get count1Input() {
    return this._count1;
  }

  // df_set - computed: false, optional: true, required: false
  private _dfSet?: string; 
  public get dfSet() {
    return this.getStringAttribute('df_set');
  }
  public set dfSet(value: string) {
    this._dfSet = value;
  }
  public resetDfSet() {
    this._dfSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfSetInput() {
    return this._dfSet;
  }

  // frag_action - computed: false, optional: true, required: false
  private _fragAction?: string; 
  public get fragAction() {
    return this.getStringAttribute('frag_action');
  }
  public set fragAction(value: string) {
    this._fragAction = value;
  }
  public resetFragAction() {
    this._fragAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragActionInput() {
    return this._fragAction;
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
      count1: cdktf.numberToTerraform(this._count1),
      df_set: cdktf.stringToTerraform(this._dfSet),
      frag_action: cdktf.stringToTerraform(this._fragAction),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      count1: {
        value: cdktf.numberToHclTerraform(this._count1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      df_set: {
        value: cdktf.stringToHclTerraform(this._dfSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frag_action: {
        value: cdktf.stringToHclTerraform(this._fragAction),
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
