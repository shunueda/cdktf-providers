// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ip6TunnelparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam#dropfrag Ip6Tunnelparam#dropfrag}
  */
  readonly dropfrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam#dropfragcputhreshold Ip6Tunnelparam#dropfragcputhreshold}
  */
  readonly dropfragcputhreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam#id Ip6Tunnelparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam#srcip Ip6Tunnelparam#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam#srciproundrobin Ip6Tunnelparam#srciproundrobin}
  */
  readonly srciproundrobin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam#useclientsourceipv6 Ip6Tunnelparam#useclientsourceipv6}
  */
  readonly useclientsourceipv6?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam citrixadc_ip6tunnelparam}
*/
export class Ip6Tunnelparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ip6tunnelparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ip6Tunnelparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ip6Tunnelparam to import
  * @param importFromId The id of the existing Ip6Tunnelparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ip6Tunnelparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ip6tunnelparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ip6tunnelparam citrixadc_ip6tunnelparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ip6TunnelparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ip6TunnelparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ip6tunnelparam',
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
    this._dropfrag = config.dropfrag;
    this._dropfragcputhreshold = config.dropfragcputhreshold;
    this._id = config.id;
    this._srcip = config.srcip;
    this._srciproundrobin = config.srciproundrobin;
    this._useclientsourceipv6 = config.useclientsourceipv6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dropfrag - computed: true, optional: true, required: false
  private _dropfrag?: string; 
  public get dropfrag() {
    return this.getStringAttribute('dropfrag');
  }
  public set dropfrag(value: string) {
    this._dropfrag = value;
  }
  public resetDropfrag() {
    this._dropfrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropfragInput() {
    return this._dropfrag;
  }

  // dropfragcputhreshold - computed: true, optional: true, required: false
  private _dropfragcputhreshold?: number; 
  public get dropfragcputhreshold() {
    return this.getNumberAttribute('dropfragcputhreshold');
  }
  public set dropfragcputhreshold(value: number) {
    this._dropfragcputhreshold = value;
  }
  public resetDropfragcputhreshold() {
    this._dropfragcputhreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropfragcputhresholdInput() {
    return this._dropfragcputhreshold;
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

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // srciproundrobin - computed: true, optional: true, required: false
  private _srciproundrobin?: string; 
  public get srciproundrobin() {
    return this.getStringAttribute('srciproundrobin');
  }
  public set srciproundrobin(value: string) {
    this._srciproundrobin = value;
  }
  public resetSrciproundrobin() {
    this._srciproundrobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srciproundrobinInput() {
    return this._srciproundrobin;
  }

  // useclientsourceipv6 - computed: true, optional: true, required: false
  private _useclientsourceipv6?: string; 
  public get useclientsourceipv6() {
    return this.getStringAttribute('useclientsourceipv6');
  }
  public set useclientsourceipv6(value: string) {
    this._useclientsourceipv6 = value;
  }
  public resetUseclientsourceipv6() {
    this._useclientsourceipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useclientsourceipv6Input() {
    return this._useclientsourceipv6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dropfrag: cdktf.stringToTerraform(this._dropfrag),
      dropfragcputhreshold: cdktf.numberToTerraform(this._dropfragcputhreshold),
      id: cdktf.stringToTerraform(this._id),
      srcip: cdktf.stringToTerraform(this._srcip),
      srciproundrobin: cdktf.stringToTerraform(this._srciproundrobin),
      useclientsourceipv6: cdktf.stringToTerraform(this._useclientsourceipv6),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dropfrag: {
        value: cdktf.stringToHclTerraform(this._dropfrag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropfragcputhreshold: {
        value: cdktf.numberToHclTerraform(this._dropfragcputhreshold),
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
      srcip: {
        value: cdktf.stringToHclTerraform(this._srcip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srciproundrobin: {
        value: cdktf.stringToHclTerraform(this._srciproundrobin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useclientsourceipv6: {
        value: cdktf.stringToHclTerraform(this._useclientsourceipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
