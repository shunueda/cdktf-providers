// https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/bgp_sessions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpSessionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/bgp_sessions#group_id BgpSessions#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/bgp_sessions#id BgpSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/bgp_sessions#ipv6 BgpSessions#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/bgp_sessions#mbpkgid BgpSessions#mbpkgid}
  */
  readonly mbpkgid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/bgp_sessions#redundant BgpSessions#redundant}
  */
  readonly redundant?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/bgp_sessions netactuate_bgp_sessions}
*/
export class BgpSessions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netactuate_bgp_sessions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpSessions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpSessions to import
  * @param importFromId The id of the existing BgpSessions that should be imported. Refer to the {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/bgp_sessions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpSessions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netactuate_bgp_sessions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/bgp_sessions netactuate_bgp_sessions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpSessionsConfig
  */
  public constructor(scope: Construct, id: string, config: BgpSessionsConfig) {
    super(scope, id, {
      terraformResourceType: 'netactuate_bgp_sessions',
      terraformGeneratorMetadata: {
        providerName: 'netactuate',
        providerVersion: '0.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._ipv6 = config.ipv6;
    this._mbpkgid = config.mbpkgid;
    this._redundant = config.redundant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // mbpkgid - computed: false, optional: false, required: true
  private _mbpkgid?: number; 
  public get mbpkgid() {
    return this.getNumberAttribute('mbpkgid');
  }
  public set mbpkgid(value: number) {
    this._mbpkgid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mbpkgidInput() {
    return this._mbpkgid;
  }

  // redundant - computed: false, optional: true, required: false
  private _redundant?: boolean | cdktf.IResolvable; 
  public get redundant() {
    return this.getBooleanAttribute('redundant');
  }
  public set redundant(value: boolean | cdktf.IResolvable) {
    this._redundant = value;
  }
  public resetRedundant() {
    this._redundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantInput() {
    return this._redundant;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      mbpkgid: cdktf.numberToTerraform(this._mbpkgid),
      redundant: cdktf.booleanToTerraform(this._redundant),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
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
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mbpkgid: {
        value: cdktf.numberToHclTerraform(this._mbpkgid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redundant: {
        value: cdktf.booleanToHclTerraform(this._redundant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
