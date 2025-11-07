// https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule#east_west IpNatRule#east_west}
  */
  readonly eastWest: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule#id IpNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of the NAT rule, PUBLIC (default) or INTERNAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule#scope IpNatRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule#target_ip_address IpNatRule#target_ip_address}
  */
  readonly targetIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule#target_name IpNatRule#target_name}
  */
  readonly targetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule#topology_uid IpNatRule#topology_uid}
  */
  readonly topologyUid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule dcloud_ip_nat_rule}
*/
export class IpNatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcloud_ip_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpNatRule to import
  * @param importFromId The id of the existing IpNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcloud_ip_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/ip_nat_rule dcloud_ip_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IpNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'dcloud_ip_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'dcloud',
        providerVersion: '0.1.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eastWest = config.eastWest;
    this._id = config.id;
    this._scope = config.scope;
    this._targetIpAddress = config.targetIpAddress;
    this._targetName = config.targetName;
    this._topologyUid = config.topologyUid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // east_west - computed: false, optional: false, required: true
  private _eastWest?: boolean | cdktf.IResolvable; 
  public get eastWest() {
    return this.getBooleanAttribute('east_west');
  }
  public set eastWest(value: boolean | cdktf.IResolvable) {
    this._eastWest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestInput() {
    return this._eastWest;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // target_ip_address - computed: false, optional: false, required: true
  private _targetIpAddress?: string; 
  public get targetIpAddress() {
    return this.getStringAttribute('target_ip_address');
  }
  public set targetIpAddress(value: string) {
    this._targetIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpAddressInput() {
    return this._targetIpAddress;
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // topology_uid - computed: false, optional: false, required: true
  private _topologyUid?: string; 
  public get topologyUid() {
    return this.getStringAttribute('topology_uid');
  }
  public set topologyUid(value: string) {
    this._topologyUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyUidInput() {
    return this._topologyUid;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      east_west: cdktf.booleanToTerraform(this._eastWest),
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      target_ip_address: cdktf.stringToTerraform(this._targetIpAddress),
      target_name: cdktf.stringToTerraform(this._targetName),
      topology_uid: cdktf.stringToTerraform(this._topologyUid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      east_west: {
        value: cdktf.booleanToHclTerraform(this._eastWest),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_ip_address: {
        value: cdktf.stringToHclTerraform(this._targetIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_uid: {
        value: cdktf.stringToHclTerraform(this._topologyUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
