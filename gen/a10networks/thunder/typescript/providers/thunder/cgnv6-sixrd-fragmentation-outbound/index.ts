// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_sixrd_fragmentation_outbound
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6SixrdFragmentationOutboundConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop Silently; 'ipv6': Use IPv6 Fragmentation for oversize packets (default); 'send-icmp': Send ICMP Type 3 Code 4 (Fragmentation Needed and DF Set); 'send-icmpv6': Send ICMP Type 2 Code 0 (Packet Too Big);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_sixrd_fragmentation_outbound#action Cgnv6SixrdFragmentationOutbound#action}
  */
  readonly action?: string;
  /**
  * Configure number of ICMP messages sent when DF set. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_sixrd_fragmentation_outbound#count1 Cgnv6SixrdFragmentationOutbound#count1}
  */
  readonly count1?: number;
  /**
  * 'drop': Drop Silently; 'ipv6': Use IPv6 Fragmentation for oversize packets; 'send-icmp': Send ICMP Type 3 Code 4 (Fragmentation Needed and DF Set) (default); 'send-icmpv6': Send ICMP Type 2 Code 0 (Packet Too Big);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_sixrd_fragmentation_outbound#df_set Cgnv6SixrdFragmentationOutbound#df_set}
  */
  readonly dfSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_sixrd_fragmentation_outbound#id Cgnv6SixrdFragmentationOutbound#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_sixrd_fragmentation_outbound#uuid Cgnv6SixrdFragmentationOutbound#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_sixrd_fragmentation_outbound thunder_cgnv6_sixrd_fragmentation_outbound}
*/
export class Cgnv6SixrdFragmentationOutbound extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_sixrd_fragmentation_outbound";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6SixrdFragmentationOutbound resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6SixrdFragmentationOutbound to import
  * @param importFromId The id of the existing Cgnv6SixrdFragmentationOutbound that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_sixrd_fragmentation_outbound#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6SixrdFragmentationOutbound to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_sixrd_fragmentation_outbound", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_sixrd_fragmentation_outbound thunder_cgnv6_sixrd_fragmentation_outbound} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6SixrdFragmentationOutboundConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6SixrdFragmentationOutboundConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_sixrd_fragmentation_outbound',
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
    this._action = config.action;
    this._count1 = config.count1;
    this._dfSet = config.dfSet;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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
      action: cdktf.stringToTerraform(this._action),
      count1: cdktf.numberToTerraform(this._count1),
      df_set: cdktf.stringToTerraform(this._dfSet),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
