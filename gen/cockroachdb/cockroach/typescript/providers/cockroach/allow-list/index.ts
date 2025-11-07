// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AllowListConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP address component of the [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) range for this entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list#cidr_ip AllowList#cidr_ip}
  */
  readonly cidrIp: string;
  /**
  * The [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) notation prefix length. A number ranging from 0 to 32 indicating the size of the network. Use 32 to allow a single IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list#cidr_mask AllowList#cidr_mask}
  */
  readonly cidrMask: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list#cluster_id AllowList#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Name of this allowlist entry. If left unset, it will inherit a server-side default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list#name AllowList#name}
  */
  readonly name?: string;
  /**
  * Set to 'true' to allow SQL connections from this CIDR range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list#sql AllowList#sql}
  */
  readonly sql: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to allow access to the management console from this CIDR range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list#ui AllowList#ui}
  */
  readonly ui: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list cockroach_allow_list}
*/
export class AllowList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_allow_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AllowList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AllowList to import
  * @param importFromId The id of the existing AllowList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AllowList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_allow_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/allow_list cockroach_allow_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AllowListConfig
  */
  public constructor(scope: Construct, id: string, config: AllowListConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_allow_list',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrIp = config.cidrIp;
    this._cidrMask = config.cidrMask;
    this._clusterId = config.clusterId;
    this._name = config.name;
    this._sql = config.sql;
    this._ui = config.ui;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_ip - computed: false, optional: false, required: true
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // cidr_mask - computed: false, optional: false, required: true
  private _cidrMask?: number; 
  public get cidrMask() {
    return this.getNumberAttribute('cidr_mask');
  }
  public set cidrMask(value: number) {
    this._cidrMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrMaskInput() {
    return this._cidrMask;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: boolean | cdktf.IResolvable; 
  public get sql() {
    return this.getBooleanAttribute('sql');
  }
  public set sql(value: boolean | cdktf.IResolvable) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // ui - computed: false, optional: false, required: true
  private _ui?: boolean | cdktf.IResolvable; 
  public get ui() {
    return this.getBooleanAttribute('ui');
  }
  public set ui(value: boolean | cdktf.IResolvable) {
    this._ui = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uiInput() {
    return this._ui;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_ip: cdktf.stringToTerraform(this._cidrIp),
      cidr_mask: cdktf.numberToTerraform(this._cidrMask),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      name: cdktf.stringToTerraform(this._name),
      sql: cdktf.booleanToTerraform(this._sql),
      ui: cdktf.booleanToTerraform(this._ui),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_ip: {
        value: cdktf.stringToHclTerraform(this._cidrIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_mask: {
        value: cdktf.numberToHclTerraform(this._cidrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql: {
        value: cdktf.booleanToHclTerraform(this._sql),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ui: {
        value: cdktf.booleanToHclTerraform(this._ui),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
