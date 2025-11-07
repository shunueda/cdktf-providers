// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuaggaBgpCommunitylistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set permit for match or deny to negate the rule. Defaults to `"permit"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist#action QuaggaBgpCommunitylist#action}
  */
  readonly action?: string;
  /**
  * The community you want to match. You can also regex and it is not validated so please be careful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist#community QuaggaBgpCommunitylist#community}
  */
  readonly community: string;
  /**
  * An optional description for this prefix list. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist#description QuaggaBgpCommunitylist#description}
  */
  readonly description?: string;
  /**
  * Enable this community list. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist#enabled QuaggaBgpCommunitylist#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the number of your Community-List. 1-99 are standard lists while 100-500 are expanded lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist#number QuaggaBgpCommunitylist#number}
  */
  readonly number: number;
  /**
  * The ACL sequence number (10-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist#seq_number QuaggaBgpCommunitylist#seq_number}
  */
  readonly seqNumber: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist opnsense_quagga_bgp_communitylist}
*/
export class QuaggaBgpCommunitylist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_quagga_bgp_communitylist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuaggaBgpCommunitylist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuaggaBgpCommunitylist to import
  * @param importFromId The id of the existing QuaggaBgpCommunitylist that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuaggaBgpCommunitylist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_quagga_bgp_communitylist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_communitylist opnsense_quagga_bgp_communitylist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuaggaBgpCommunitylistConfig
  */
  public constructor(scope: Construct, id: string, config: QuaggaBgpCommunitylistConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_quagga_bgp_communitylist',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
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
    this._community = config.community;
    this._description = config.description;
    this._enabled = config.enabled;
    this._number = config.number;
    this._seqNumber = config.seqNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
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

  // community - computed: false, optional: false, required: true
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // seq_number - computed: false, optional: false, required: true
  private _seqNumber?: number; 
  public get seqNumber() {
    return this.getNumberAttribute('seq_number');
  }
  public set seqNumber(value: number) {
    this._seqNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumberInput() {
    return this._seqNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      community: cdktf.stringToTerraform(this._community),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      number: cdktf.numberToTerraform(this._number),
      seq_number: cdktf.numberToTerraform(this._seqNumber),
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
      community: {
        value: cdktf.stringToHclTerraform(this._community),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      number: {
        value: cdktf.numberToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seq_number: {
        value: cdktf.numberToHclTerraform(this._seqNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
