// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetIpRangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this range. This argument is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range#comment SubnetIpRange#comment}
  */
  readonly comment?: string;
  /**
  * The end IP for the new IP range (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range#end_ip SubnetIpRange#end_ip}
  */
  readonly endIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range#id SubnetIpRange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The start IP for the new IP range (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range#start_ip SubnetIpRange#start_ip}
  */
  readonly startIp: string;
  /**
  * The subnet identifier (ID or CIDR) for the new IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range#subnet SubnetIpRange#subnet}
  */
  readonly subnet: string;
  /**
  * The IP range type. Valid options are: `dynamic`, `reserved`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range#type SubnetIpRange#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range maas_subnet_ip_range}
*/
export class SubnetIpRange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_subnet_ip_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubnetIpRange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubnetIpRange to import
  * @param importFromId The id of the existing SubnetIpRange that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubnetIpRange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_subnet_ip_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet_ip_range maas_subnet_ip_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetIpRangeConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetIpRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_subnet_ip_range',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._endIp = config.endIp;
    this._id = config.id;
    this._startIp = config.startIp;
    this._subnet = config.subnet;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // end_ip - computed: false, optional: false, required: true
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
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

  // start_ip - computed: false, optional: false, required: true
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      end_ip: cdktf.stringToTerraform(this._endIp),
      id: cdktf.stringToTerraform(this._id),
      start_ip: cdktf.stringToTerraform(this._startIp),
      subnet: cdktf.stringToTerraform(this._subnet),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_ip: {
        value: cdktf.stringToHclTerraform(this._endIp),
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
      start_ip: {
        value: cdktf.stringToHclTerraform(this._startIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
