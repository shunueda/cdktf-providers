// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallGtpIeremovepolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy#adom ObjectFirewallGtpIeremovepolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy#fosid ObjectFirewallGtpIeremovepolicy#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy#gtp ObjectFirewallGtpIeremovepolicy#gtp}
  */
  readonly gtp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy#id ObjectFirewallGtpIeremovepolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy#remove_ies ObjectFirewallGtpIeremovepolicy#remove_ies}
  */
  readonly removeIes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy#scopetype ObjectFirewallGtpIeremovepolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy#sgsn_addr ObjectFirewallGtpIeremovepolicy#sgsn_addr}
  */
  readonly sgsnAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy#sgsn_addr6 ObjectFirewallGtpIeremovepolicy#sgsn_addr6}
  */
  readonly sgsnAddr6?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy fortimanager_object_firewall_gtp_ieremovepolicy}
*/
export class ObjectFirewallGtpIeremovepolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_gtp_ieremovepolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallGtpIeremovepolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallGtpIeremovepolicy to import
  * @param importFromId The id of the existing ObjectFirewallGtpIeremovepolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallGtpIeremovepolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_gtp_ieremovepolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_ieremovepolicy fortimanager_object_firewall_gtp_ieremovepolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallGtpIeremovepolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallGtpIeremovepolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_gtp_ieremovepolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._fosid = config.fosid;
    this._gtp = config.gtp;
    this._id = config.id;
    this._removeIes = config.removeIes;
    this._scopetype = config.scopetype;
    this._sgsnAddr = config.sgsnAddr;
    this._sgsnAddr6 = config.sgsnAddr6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // gtp - computed: false, optional: false, required: true
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
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

  // remove_ies - computed: true, optional: true, required: false
  private _removeIes?: string[]; 
  public get removeIes() {
    return cdktf.Fn.tolist(this.getListAttribute('remove_ies'));
  }
  public set removeIes(value: string[]) {
    this._removeIes = value;
  }
  public resetRemoveIes() {
    this._removeIes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeIesInput() {
    return this._removeIes;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sgsn_addr - computed: false, optional: true, required: false
  private _sgsnAddr?: string; 
  public get sgsnAddr() {
    return this.getStringAttribute('sgsn_addr');
  }
  public set sgsnAddr(value: string) {
    this._sgsnAddr = value;
  }
  public resetSgsnAddr() {
    this._sgsnAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnAddrInput() {
    return this._sgsnAddr;
  }

  // sgsn_addr6 - computed: false, optional: true, required: false
  private _sgsnAddr6?: string; 
  public get sgsnAddr6() {
    return this.getStringAttribute('sgsn_addr6');
  }
  public set sgsnAddr6(value: string) {
    this._sgsnAddr6 = value;
  }
  public resetSgsnAddr6() {
    this._sgsnAddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnAddr6Input() {
    return this._sgsnAddr6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      fosid: cdktf.numberToTerraform(this._fosid),
      gtp: cdktf.stringToTerraform(this._gtp),
      id: cdktf.stringToTerraform(this._id),
      remove_ies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._removeIes),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sgsn_addr: cdktf.stringToTerraform(this._sgsnAddr),
      sgsn_addr6: cdktf.stringToTerraform(this._sgsnAddr6),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp: {
        value: cdktf.stringToHclTerraform(this._gtp),
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
      remove_ies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._removeIes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgsn_addr: {
        value: cdktf.stringToHclTerraform(this._sgsnAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgsn_addr6: {
        value: cdktf.stringToHclTerraform(this._sgsnAddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
